interface Function {
    getParameters(): string[];
    fields: Oh.FunctionParameter[];
}
declare module Oh {
    class FunctionParameter {
        index: number;
        name: string;
        where: ApiFieldTypes;
    }
}
declare module Oh {
    enum HttpMethods {
        Get = 0,
        Post = 1,
        Put = 2,
        Delete = 3,
    }
}
declare module Oh {
    enum ApiFieldTypes {
        Default = 0,
        Query = 0,
        Route = 1,
        Body = 2,
    }
}
declare module Oh {
    function apiMethod(config?: {
        url?: string;
        resultPath?: string;
        httpMethod?: HttpMethods;
    }): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
    function apiField(config?: {
        where?: Oh.ApiFieldTypes;
        name?: string;
    }): (target: any, propertyKey: string, parameterIndex: number) => void;
    function apiBase(url: string): <T extends new () => {}>(target: T) => T;
    class Test {
        newProperty: string;
        hello: string;
        Q(a: number, qq: string): void;
    }
}
declare module Oh {
    /**
     * Http請求客戶端物件
     */
    class HttpClient {
        /**
         * 預設Request標頭
         */
        requestHeader: any;
        /**
         * 是否包含認證
         */
        withCredentials: boolean;
        /**
         * 進度回呼
         */
        progressCallback: (event: ProgressEvent) => any;
        /**
         * 使用者帳號
         */
        user: string;
        /**
         * 使用者密碼
         */
        password: string;
        private typeOf(obj);
        private openAndSend(method, url, header?, data?, user?, password?, progressCallback?);
        /**
         * GET
         * @param url 網址
         * @param header 標頭
         * @param data 資料
         * @param user 使用者帳號
         * @param password 使用者密碼
         * @param progressCallback 進度回呼
         */
        getAsync(url: string, header?: any, data?: (FormData | String | Object), user?: string, password?: string, progressCallback?: (event: ProgressEvent) => any): Promise<HttpResponse>;
        /**
         * POST
         * @param url 網址
         * @param header 標頭
         * @param data 資料
         * @param user 使用者帳號
         * @param password 使用者密碼
         * @param progressCallback 進度回呼
         */
        postAsync(url: string, header?: any, data?: (FormData | String | Object), user?: string, password?: string, progressCallback?: (event: ProgressEvent) => any): Promise<HttpResponse>;
        /**
         * PUT
         * @param url 網址
         * @param header 標頭
         * @param data 資料
         * @param user 使用者帳號
         * @param password 使用者密碼
         * @param progressCallback 進度回呼
         */
        putAsync(url: string, header?: any, data?: (FormData | String | Object), user?: string, password?: string, progressCallback?: (event: ProgressEvent) => any): Promise<HttpResponse>;
        /**
         * DELETE
         * @param url 網址
         * @param header 標頭
         * @param data 資料
         * @param user 使用者帳號
         * @param password 使用者密碼
         * @param progressCallback 進度回呼
         */
        deleteAsync(url: string, header?: any, data?: (FormData | String | Object), user?: string, password?: string, progressCallback?: (event: ProgressEvent) => any): Promise<HttpResponse>;
    }
    /**
     * HttpClient結果
     */
    class HttpResponse {
        /**
         * 狀態碼
         */
        statusCode: number;
        /**
         * Response標頭
         */
        header: any;
        /**
         * 結果類型
         */
        resultType: string;
        /**
         * 結果文字
         */
        resultText: string;
        /**
         * 結果XML
         */
        resultXML: Document;
        /**
         * 結果
         */
        result: any;
        /**
         * 轉換為JSON結果
         */
        toJSON(): JSON;
    }
}
declare module Oh {
    class RestClientBuilder {
        static createInstance<T>(type: new () => T): T;
    }
}
