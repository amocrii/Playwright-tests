
export const filtersSelectors = {
    country_filters: '#filter-country',
    filter_type: (type: string) => `#filter-${type}`,
    filter_option: (option: string) => `label[id^="${option}"]`,
    update_button: '#btn-update',
    column_header: '[role="columnheader"]',
    table_rows: 'table tbody tr'
}