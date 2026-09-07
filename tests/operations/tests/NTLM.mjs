/**
 * NTLM test.
 *
 * @author brun0ne [brunonblok@gmail.com]
 * @copyright Crown Copyright 2022
 * @license Apache-2.0
 */
import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "NT Hash",
        input: "QWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+.,?/",
        expectedOutput: "C5FA1C40E55734A8E528DBFE21766D23",
        recipeConfig: [
            {
                op: "NT Hash",
                args: [],
            },
        ],
    },
    {
        name: "LM Hash",
        input: "QWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+.,?/",
        expectedOutput: "6D9DF16655336CA75A3C13DD18BA8156",
        recipeConfig: [
            {
                op: "LM Hash",
                args: [],
            },
        ],
    },

    {
        name: "LM Hash: uppercase expansion stays within 14-byte limit",
        input: "09409aa79b41eff65fdf0c9158e4992399c360fb7f3edbbd8a3c3aede8aca3e2",
        expectedOutput: "DF9A2F93E3C6CAC304760AA731C3F9A0",
        recipeConfig: [
            {
                op: "From Hex",
                args: ["None"],
            },
            {
                op: "LM Hash",
                args: [],
            },
        ],
    },
]);
