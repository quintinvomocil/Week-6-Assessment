
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displayed deuling bots', async() => {
    await driver.findElement(By.id('draw')).click()
    
    const choices = await driver.findElement(By.id('choices'))
    
    const displayed = await choices.isDisplayed()
    
    expect(displayed).toEqual(true)
    
    await driver.sleep(2000)
})

test('Add duo bot to list', async () => {
    await driver.findElement(By.id('draw')).click()
    
    const botSelectBtn = await driver.findElement(By.xpath('//*[@id="choices"]/div[1]/button')).click()

    const display = await botSelectBtn.isDisplayed()

    expect(display).toBe(true)

    await driver.sleep(3000)
})