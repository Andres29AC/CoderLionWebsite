module.exports ={
    moduleNameMapper: {
        "^@/components(.*)$": "<rootDir>/components$1",
        //"\\.module\\.css$": "identity-obj-proxy",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/$1",
        "^~/(.*)$": "<rootDir>/node_modules/$1",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    }
}
