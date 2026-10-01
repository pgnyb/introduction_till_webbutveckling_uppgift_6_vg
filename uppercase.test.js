const convertToUppercase = require("./uppercase");

test("Convert the text to UPPERCASE letters", () => {

    const result = convertToUppercase("testing, testing...");

    expect(result).toBe("TESTING, TESTING...")
    
});