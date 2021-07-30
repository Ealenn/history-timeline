import { HistoryTab } from "./history-tab";

export interface HistorySection {
    Id: string;
    Title: string;
    Date: string;
    Content: string;
    Tabs: HistoryTab[];
}
