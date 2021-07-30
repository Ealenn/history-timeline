export interface Content {
  page: LangString;
  date: string;
  tabs: ContentTab[]
}

export interface ContentTab {
  page: LangString;
}

export interface LangString {
  fr: string;
  en: string;
}
