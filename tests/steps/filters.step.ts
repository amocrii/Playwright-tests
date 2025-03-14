import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { filtersSelectors } from '../page-object/filter';
import * as dotenv from 'dotenv';
import { page } from '../hooks'

dotenv.config();

Given('The user is on the landing page for the WD site', async () => {
    await page.goto(`${process.env.BASE_URL}`)
})

Then('The Country filter is available', async () => {
    await page.locator(filtersSelectors.country_filters).isVisible()
})

When('The user selects {string} from the {string} filter list on the left panel', async (filterName, filterType) => {
    await page.click(`${filtersSelectors.filter_type(filterType)} ${filtersSelectors.filter_option(filterName)}`)
})

Then('Click on Update button for the {string} filter list', async (filterType) => {
    await page.click(`${filtersSelectors.filter_type(filterType)} ${filtersSelectors.update_button}`)
    await page.waitForLoadState('networkidle')
})

Then('The grid displays all meetings associated with the {string} {string}', async (filterType, filterName) => {
    const headerText = await page.locator(filtersSelectors.column_header).last().textContent()
    expect(headerText?.toLowerCase()).toBe(filterType)

    const cells = await page.locator(`${filtersSelectors.table_rows} td:last-child`).allTextContents()
    for(const cellText of cells) {
        expect(cellText.trim()).toBe(filterName)
    }
})

