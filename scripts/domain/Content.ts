export interface Content {
  page: LangString;
  tabs: ContentTab[]
}

export interface ContentTab {
  page: LangString;
}

export interface LangString {
  fr: string;
  en: string;
}
