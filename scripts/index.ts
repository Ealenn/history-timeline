import wiki from 'wikijs';
import { Content } from './domain/Content';
import { WikipediaPage } from './domain/WikipediaPage';
import { HistorySection } from '../src/lib/domain/history-section';
import { HistoryTab } from '../src/lib/domain/history-tab';
import * as Fs from 'fs';
import * as Path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const contents = require('./content.json') as Content[];
const availableLang = ['en', 'fr'];

(async () => {
  /**
   * MAPPER
   */
  async function getPage(lang: string, pageTitle: string): Promise<WikipediaPage> {
    const api = wiki({
      apiUrl: `https://${lang}.wikipedia.org/w/api.php`,
      origin: null,
      headers: {
        'User-Agent': 'history-timeline/0.0 (https://github.com/Ealenn/history-timeline/)'
      }
    });
    const page = await api.page(pageTitle);
    const Content = await page.rawContent();

    return {
      Id: page.raw.pageid,
      Title: page.raw.title,
      Url: page.raw.fullurl,
      Content: Content.split('\n')[0]
    };
  }

  /**
   * DOWNLOAD
   */
  async function GetSections(lang: string): Promise<HistorySection[]> {
    const sections = new Array<HistorySection>();

    for (const content of contents)
    {
      const tabs = new Array<HistoryTab>();
      for (const tab of content.tabs) {
        const page = await getPage(lang, tab.page[lang]);
        const historyTab: HistoryTab = {
          Id: tab.page['en'],
          Title: page.Title,
          Description: page.Content,
          WikipediaUrl: page.Url
        };
        tabs.push(historyTab)
      }
      
      const page = await getPage(lang, content.page[lang]);
      const section: HistorySection = {
        Id: content.page['en'],
        Title: page.Title,
        Content: page.Content,
        Tabs: tabs
      };
      sections.push(section);
    }

    return sections;
  }

  /**
   * SAVE
   */
  function Save(lang: string, content: any): void
  {
    const path = Path.join(__dirname, '../src/store/content/', `content.${lang}.ts`);
    Fs.writeFileSync(path, 'export default ' + content, {
      encoding: 'utf-8'
    });
  }

  /**
   * RUN
   */
  for (const lang of availableLang)
  {
    const sections = await GetSections(lang);
    const jsonResult = JSON.stringify(sections, null, 2);
    Save(lang, jsonResult);
  }
})();
