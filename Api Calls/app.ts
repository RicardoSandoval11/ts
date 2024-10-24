(async () => {

    // POST
    interface CreateApplicationRequest {
        clientCui: string,
        isPep: boolean,
        isCpe: boolean,
        isOwnFunds: boolean
    }
    
    interface CreateApplicationResponse {
        uuid: string
    }

    interface ResponseSuccess<T> {
        statusCode: number,
        successCode: number,
        data: T
    }
    
    const createApplicationAsync: (request: CreateApplicationRequest) => Promise<CreateApplicationResponse> = async (request: CreateApplicationRequest) : Promise<CreateApplicationResponse> => {

        let requestData: RequestInit = {
            body: JSON.stringify(request),
            headers: [
                ["Content-Type", "application/json"]
            ],
            method: 'POST'
        }

        const response = await fetch("https://d1a0xvknet1ite.cloudfront.net/api/customer/v1/credit-card-application", requestData);

        if(!response.ok)
            throw new Error("API call was not successful");

        const body : ResponseSuccess<CreateApplicationResponse> = await response.json() as ResponseSuccess<CreateApplicationResponse>;

        return body.data;
    }

    const processDataAsync: () => Promise<void> = async () : Promise<void> => {

        let request : CreateApplicationRequest = {
            clientCui: "3020593500101",
            isPep: false,
            isCpe: false,
            isOwnFunds: true
        };

        await createApplicationAsync(request);

    }

    // GET
    interface Catalog {
        id: number,
        name: string
    }

    interface SubLocation extends Catalog {}

    interface Location extends Catalog {
        subLocations: SubLocation[]
    }

    const getLocationsAsync: () => Promise<Location[]> = async () : Promise<Location[]> => {

        
        const response = await fetch('https://d1vqh8j1bjmdxz.cloudfront.net/api/customer/v1/catalogs/locations', {
            method: 'GET'
        });

        if(!response.ok)
            throw new Error("API call has failed");

        const body = await response.json() as ResponseSuccess<Location[]>;

        return body.data;
    }

})()

