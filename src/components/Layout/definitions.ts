export interface FooterListItem {
  header: string;
  items: FooterListItemText[];
}

interface FooterListItemText {
  text: string;
  to?: string;
}
