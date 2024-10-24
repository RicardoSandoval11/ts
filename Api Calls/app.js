"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    const createApplicationAsync = (request) => __awaiter(void 0, void 0, void 0, function* () {
        let requestData = {
            body: JSON.stringify(request),
            headers: [
                ["Content-Type", "application/json"]
            ],
            method: 'POST'
        };
        const response = yield fetch("https://d1a0xvknet1ite.cloudfront.net/api/customer/v1/credit-card-application", requestData);
        if (!response.ok)
            throw new Error("API call was not successful");
        const body = yield response.json();
        return body.data;
    });
    const processDataAsync = () => __awaiter(void 0, void 0, void 0, function* () {
        let request = {
            clientCui: "3020593500101",
            isPep: false,
            isCpe: false,
            isOwnFunds: true
        };
        yield createApplicationAsync(request);
    });
    const getLocationsAsync = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch('https://d1vqh8j1bjmdxz.cloudfront.net/api/customer/v1/catalogs/locations', {
            method: 'GET'
        });
        if (!response.ok)
            throw new Error("API call has failed");
        const body = yield response.json();
        return body.data;
    });
}))();
