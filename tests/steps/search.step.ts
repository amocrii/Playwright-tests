import { Given, When, Then } from "@cucumber/cucumber";
import { expect, Response } from "@playwright/test";
import { searchSelectors } from "../page-object/search";
import { page } from "../hooks";
import * as dotenv from 'dotenv';

dotenv.config();

When('The user searches for the company {string} in the top right search bar', async (searchCriteria) => {
    await page.click(searchSelectors.searchbox)
    await page.fill(searchSelectors.searchbox, searchCriteria)
});

When('The user clicks on the Company Name hyperlink from the search results', async () => {
    await page.click(searchSelectors.dropdown_list_option)
});

Then('The user lands on the {string} vote card page.', async (searchCriteria) => {
    const response = await page.waitForResponse((response: Response) => 
        response.url().includes('/GetLatestMeetingDetails')
    )

        const requestUrl = new URL(response.url())

        const capturedSecurityId = requestUrl.searchParams.get('securityId')

        const currentUrl = new URL(page.url())

        const securityIdInPageUrl = currentUrl.searchParams.get('securityId')

        expect(securityIdInPageUrl).toBe(capturedSecurityId)
});

Then('{string} should appear in the top banner.', async (searchCriteria) => {
    const banner_text = await page.locator(searchSelectors.top_banner_text).textContent()

    expect(banner_text?.trim()).toBe(searchCriteria)
});