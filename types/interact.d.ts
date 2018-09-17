declare interface IKeyValueObject<T> {
    [key: string]: T
}

declare class ErrorHandler {
    constructor($app$$: Interact.IApplication);
    public $displayError($responseError$$: any): any;
    public onError($xhr$$: XMLHttpRequest, $status$$: any): any;
    _displayError($responseError$$: any): any;
    _getActionHandler($actionUrl$$: string, $errorResponse$$: any): any;
    _getCommunicationError(): any;
    _getCookiesDisabledError(): any;
    _getErrorHandler($xhr$$: XMLHttpRequest): any;
    _getLinkExpiredError(): any;
    _getNonVisualInteractionError(): any;
    _handleAccessTokenError($xhr$$: XMLHttpRequest): any;
    _handleApplicationDeniedError($JSCompiler_object_inline_responseError_0_xhr$$: any): any;
    _handleBadCredetialsError($xhr$$: XMLHttpRequest): any;
    _handleGeneralError($xhr$$: XMLHttpRequest): any;
    _handleTrialExpiredError($xhr$$: XMLHttpRequest): any;
    _handleUrlTokenError($xhr$$: XMLHttpRequest): any;
}

declare function initExtensions(extensionName: string, initCallback: (app: Interact.IApplication) => void): void;
declare var mobilewebappInstance: Interact.IApplication;

declare var NAVIGATION: {
    BACK_FROM_hELP: string;
    BACK_TO_COVER_APP: string;
    BACK_TO_LOGIN: string;
    CALLBACK_REQUEST: string;
    CALL_DIALED: string;
    CALL_INITIATED: string;
    CALL_TRANSFER: string;
    CURRENT: string;
    FINISH: string;
    HELP: string;
    JUMP_TO: string;
    LOGIN_REDIRECT: string;
    MAILTO_REQUEST: string;
    NEXT: string;
    NONE: string;
    PREVIOUS: string;
    RELOAD_ELEMENT: string;
    RELOAD_INSTANCE: string;
    RETRY: string;
    SAVE_UNFINISHED: string;
    START_OVER: string;
    TERMINATED_BY_USER: string;
}

declare var HEADERS: {
    SERVER_VERSION: string;
    PROTOCOL_VERSION: string;
    APPLICATION_VERSION: string;
    JMA_MODULE_VERSION: string;
    JMA_VERSION: string;
    DEVICE_OS: string;
    DEVICE_OS_VERSION: string;
    DEVICE_TYPE: string;
    OS_PALTFORM_VERIOSN: string;
    DEVICE_NAME: string;
    IMEI: string;
    APPLICATION_KEY: string;
    TENANT_ID: string;
    UNAUTHENTICATED_REASON: string;
    ENVIRONMENT_NAME: string;
    SECURITY_TOKEN: string;
    USER_ID: string;
    ACCESS_TOKEN: string;
    OBJECT_VERSION: string;
    OBJECT_STEP_ID: string;
    OBJECT_ID: string;
    SPACE_ID: string;
    OBJECT_INSTANCE_ID: string;
    SESSION_ID: string;
    FILE_LOCAL_ADDRESS: string;
    BROWSER: string;
    BROWSER_VERSION: string;
    LATITUDE: string;
    LONGITUDE: string;
    LOCALE: string;
    WIFI: string;
    TIME_ZONE: string;
    CONTENT_TYPE: string;
    CONTENT_LENGTH: string;
    ACCEPT: string;
    REQUEST_TIMESTAMP: string;
    TIMESTAMP: string;
    CLIENT_TYPE: string;
    RUN_MODE: string;
    CHANNEL_TYPE: string;
    ETAG: string;
    IF_NONE_MATCH: string;
    IF_MODIFIED_SINCE: string;
    CACHE_CONTROL: string;
    LAST_MODIFIED: string;
    SCREEN_HEIGHT: string;
    SCREEN_WIDTH: string;
}

declare namespace Interact {
    export interface IApplication {
        backButton?: JQuery;
        channelType: string;
        constants: any;
        extension: Application.IExtensions;
        mPage?: JQuery;
        mode?: any;
        nextButton?: JQuery;
        options: Application.IOptions;
        previousPage?: JQuery;
        cover_protocolManager: ProtocolManager.IProtocolManager;
        protocolManager: ProtocolManager.IProtocolManager;
        translator: Application.ITranslate;
        environment: string;
        registerExtension($type$$: Application.rendererEventTypeString, $fn$$: Extensions.PageReturn): void;
        registerExtension($type$$: "loaded", $fn$$: Extensions.VoidReturn): void;
        registerExtension($type$$: "onError", $fn$$: (ctx: Extensions.IErrorContext) => void): void;
        changePage($target$$: any, $transition$$: any, $dir_direction$$: any, $addToPageContainer$$: any): void;
        checkForPendingPhotos(): any;
        closeSideController($page$$: any, $transitionType$$: any, $transitionDirection$$: any): void;
        fireClientEvent(navType$$2_page$$: any): void;
        gatherParams($params$$: any): any[];
        getAuthRedirectQuery(): any;
        getRenderer($type$$: any): any;
        getThemeImageByName($imageName$$: any): any;
        initUI($urlOptions$$: any, $data$$: any): any;
        isAuthenticatedSuccessfully($authQuery$$: any): any;
        isBackAvailable($page$$: any): any;
        isLoginRedirectFlow(): any;
        isNextAvailable($page$$: any): any;
        onNavigationBtnClicked($action$$: any, $page$$: any): any;
        performBackToCoverApp(): any;
        performClientActions($clientActions$$: any): any;
        performRestart(): any;
        registerEvent($type$$: string, $fn$$: any): any;
        renderPage($page$$: any, $navType$$: any): any;
        saveAuthQuery($authQuery$$: any): void;
        showInteractionsList(): any;
        showLocalhostSettingError(): any;
        uploadPhotosAndPerformNavigation($photosToUpload$$: any): any;
    }

    namespace ProtocolManager {
        export interface IProtocolManager {
            JAS_TIMEOUT: number;
            accessToken: any;
            accountId: string;
            app: IApplication;
            applicationKey: string;
            baseUrl: string;
            curPage: Paging.IPage;
            designerId: string;
            errorHandler: IErrorHandler;
            imei: string;
            interactionVar: any;
            isProgressBarVisible: boolean;
            jasUrl: string;
            lastPage: any;
            mode: any;
            objectId: string;
            objectInstanceId: string;
            objectStepId: string;
            port: number;
            queryString: any;
            retryOpts: any;
            scheme: string;
            securityToken: any;
            server: string;
            silent: boolean;
            spaceId: any;
            tenant: string;
            theme: string;
            userId: string;
            allocatePhoneNumber($group$$: string, $success$$: (arg: any) => void): void;
            buildUrl($scheme$$: "http" | "https", $server$$: string, $port$$: number): string;
            checkChatAvailability($queue$$: string, $availabilityHandler$$: (arg: any) => void): void;
            createInstance($renderFunction$$: Function, $clientActionsFunction$$: Function[]): void;
            createInstanceForHiddens(): void;
            freePhoneNumber($phoneNum$$: string, $success$$: (arg: any) => void): void;
            getAgentAppSettings($successCallback$$: (appSettings: any) => void): void;
            getAllVars($success$$: (variables: IKeyValueObject<any>) => void, $fail$$?: () => void): void;
            getCallAvailablity($appkey$$: string, $cb$$: (callAvailability: any) => void): void;
            getChatMessages($chatMessageHandler$$: (chatMessage: any) => void): void;
            getInteractionList($loginDone$$: (interactionList: IInteractionList) => void): void;
            getVar($varname$$: string, $success$$: (value: any) => void, $fail$$?: () => void): void;
            hideProgressBar(): void;
            initImei(): void;
            notifyServer($navType$$: string, $params$$: any, $success$$: () => void, $failure$$: () => void): void;
            performNavigation($navType$$: string, $params$$?: any, $variables$$?: IKeyValueObject<any>): void;
            requestChat($queue$$: string, $chatRequestHandler$$: (chatResponse: any) => void): void;
            restore(): void;
            retrieveEWT($sender$$: string, $queueName$$: string, $retrieveEWTSucess$$: ($sender$$: string, ewtMessage: any) => void, $retrieveEWTFailure$$: ($sender$$: string, ewt: any) => void): any;
            retryLastRequest(): void;
            save(): void;
            saveRequest($func$$: Function, $argsArray$$: any[]): void;
            sendChatMessage($text$$: string, $messageSentHandler$$: () => void): void;
            sendContactUsEmail($name$$: string, $phoneNumber$$: string, $emailFrom$$: string, $message$$: string, $success$$: () => void): void;
            setRequestHeader($xhr$$: JQueryXHR): void;
            setVar($varname$$: string, $value$$: any): void;
            showProgressBar($message$$?: string): void;
            terminateChat($terminatedHandler$$: () => void): void;
            uploadResource($blob$$: Blob, $elementId$$: string, $file_local_path$$: string, $callback$$: () => void, $PhotosToUpload$$: any[], $photoRef$$: string): FormData;
        }

        interface IErrorHandler {
            app: IApplication;
            $displayError($responseError$$: string): void;
            onError($xhr$$: JQueryXHR, $status$$: string): void;
        }

        export interface IInteractionList {
            resources: IResource;
        }

        interface IResource {
            spaces: ISpace[];
            pageTitle: string;
        }

        interface ISpace {
            spaceMessage?: string;
            spaceInteractions?: ISpaceInteraction[];
            subSpaces?: ISpace[];
            spaceTitle?: string;
        }

        interface ISpaceInteraction {
            id: string;
            interactionName: string;
            description: string;
        }
    }

    namespace Paging {
        interface IPageContentHeader {
            id: string;
            innerHtml: string;
        }

        interface IPageContent {
            allowHorizonalScroll: boolean;
            allowVerticalScroll: boolean;
            contentHeader: IPageContentHeader;
        }

        interface IMenuButton {
            buttonAction: string;
            buttonImageName?: string;
            buttonLabel: string;
            buttonState: string;
            buttonVisible: boolean;
        }

        interface IPageMenu {
            menuButtons: IMenuButton[];
            menuVisible: boolean;
        }

        interface IPageNavigation {
            navigationLeft: IMenuButton;
            navigationRight: IMenuButton;
            navigationTitle: string;
            pageReferenceName: string;
        }

        interface IPage {
            language: string;
            pageContent: IPageContent;
            pageMenu: IPageMenu;
            pageNavigation: IPageNavigation;
        }
    }

    namespace Extensions {
        interface IExtensionContext {
            pageElement: Paging.IPage;
            pm: ProtocolManager.IProtocolManager;
            page?: Paging.IPage;
            getInteractionId(): string;
            getPage(): Paging.IPage;
            getVariable(varName: string, success?: (value: any) => void, fail?: (xhr: JQueryXHR) => void): any;
            setVariable(varName: string, value: any): void;
        }

        type VoidReturn = (ctx: IExtensionContext, page: JQuery) => void;
        type PageReturn = (ctx: IExtensionContext, page: JQuery) => JQuery;

        interface IErrorContext {
            alert: {
                alertTitle: string;
                alertMessageBody: string;
                alertButtons: {
                    alertButtonClientAction: {
                        action: string;
                    };
                    alertButtonTitle: string;
                }[];
            }
            errorId: string;
        }
    }

    namespace Application {
        type rendererEventTypeString = "pageRenderer" |
            "callbackPageRenderer" | "chatPageRenderer" |
            "contactUsPageRenderer" | "pageFooterRenderer" |
            "pageHeaderRenderer" | "pageRenderer" |
            "sendEmailPageRenderer" | "uploadPhotosMatrixRenderer";

        interface IOptions {
            mode: string;
            appExtension: string;
            layout: any;
            connection: any;
            authentication: any;
            breadCrumbsSettings: any;
            autostart: any;
            events: any;
            allowStopAndSave: boolean;
            savedInteractionsTimeframe: number;
            savedInteractionsNumberLimit: number;
            limitOfRecentRoomsInList: number;
            theme: any;
            contactUsSettings: any;
            historySettings: any;
            extensionIds: string[];
            extensionsUrls: string[];
            numOfDaysLeft: number;
            deploymentType: string;
            allowJasExpirienceLaunchpad: boolean;
            allowCollaboration: boolean;
            trial: boolean;
        }

        interface IMapping {
            ERR_LARGE_FILE: string;
            MSG_PLEASE_SELECT_A_CHOICE: string;
            LBL_CHAT: string;
            MSG_MESSAGE_REQUIRED: string;
            MSG_NAVIGATION_TIMEOUT: string;
            MSG_TAKE_NEW_PHOTO: string;
            MSG_EMAIL_INVALID: string;
            BTN_REQUEST_CALLBACK: string;
            LBL_HOURS: string;
            BTN_NEW_ROOM: string;
            LBL_EMAIL: string;
            MSG_SENDING_MAIL: string;
            HEADER_MOBILE: string;
            MSG_ERROR_FAILED_TO_CONNECT: string;
            MSG_WAIT_TIME_NOT_AVIALABLE: string;
            MSG_LICENSE_EXPIRED: string;
            HEADER_EMAIL: string;
            LBL_SCHEDULE_CALLRETURN: string;
            HEADER_CUSTOMER: string;
            MSG_DEVICE_NOT_SUPPORT_SHARING: string;
            MSG_N_A_DUE_TO_CALENDAR_SCHEDULE: string;
            MSG_LOADING: string;
            BTN_NEXT: string;
            MSG_ERROR_NON_VISUAL_INTERACTION_TITLE: string;
            MSG_ERROR_LICENCE_TITLE: string;
            BTN_HELP: string;
            BTN_DONE: string;
            LBL_REMOVE: string;
            MSG_ERROR_OUT_OF_RANGE: string;
            LBL_YESTERDAY: string;
            MSG_CALLBACK_THANKS: string;
            LBL_SELF_SERVICE: string;
            BTN_SEND: string;
            MSG_INPUT_VALUE: string;
            BTN_CLICK_TO_CALL: string;
            MSG_ERROR_SERVER_RUNTIME: string;
            LBL_NO: string;
            BTN_END_INTERACTION: string;
            BTN_RETRY: string;
            LBL_ESTIMATED_WAIT_TIME: string;
            MSG_ERROR_VALIDATION: string;
            BTN_LEAVE_BUTTON: string;
            MSG_BAD_CREDENTIALS: string;
            LBL_NO_AGENT_AVAILABLE: string;
            LBL_PREVIEW: string;
            HEADER_AGENT_ID: string;
            LBL_COMING_SOON: string;
            LBL_COLLABORATION: string;
            BTN_START_OVER: string;
            LBL_OK: string;
            HEADER_STATUS: string;
            MSG_ERROR_COOKIES_DISABLED: string;
            BTN_RELOAD_INTERACTION: string;
            MSG_ERROR_LICENCE_BODY: string;
            LBL_MAILTO: string;
            MSG_CONFIRM_EXIT: string;
            MSG_INTERACTION_LINK_EXPIRED: string;
            MSG_QUIT_AND_SAVE_CONFIRM: string;
            BTN_CLOSE_ROOMS: string;
            LBL_SAVE: string;
            LBL_PHONE: string;
            MSG_ERROR_NON_VISUAL_INTERACTION_BODY: string;
            LBL_EMAIL_US: string;
            LBL_CALL: string;
            MSG_DELETE_PHOTO: string;
            MSG_EMAIL_REQUIRED: string;
            MSG_NO_CHAT_AGENTS: string;
            MSG_VIEW_FULL_SIZE_PHOTO: string;
            LBL_CONTACT_US: string;
            LBL_TRANSFER: string;
            LBL_TODAY: string;
            MSG_INTERACTION_END: string;
            MSG_ERROR_CHAT: string;
            MSG_LIKE_TO_RETRY: string;
            LBL_NAME: string;
            Q_CLOSE_ROOM: string;
            BTN_CLOSE: string;
            BTN_BACK: string;
            LBL_QUIT: string;
            BTN_CALL_NOW: string;
            MSG_SESSION_EXPIRED_INACTIVITY: string;
            LBL_CALLRETURN: string;
            LBL_CANCEL: string;
            BTN_MORE: string;
            MSG_UPLOAD_SUCCESS: string;
            MSG_UPLOADING_PHOTOS: string;
            LBL_INTERACTIONS: string;
            LBL_SELECT: string;
            MSG_TYPE_MESSAGE: string;
            LBL_CUSTOMER_TYPING: string;
            TOAST_TRANSFER: string;
            MSG_QUIT_CONFIRM: string;
            HEADER_DATE: string;
            MSG_UPLOAD_FAILED: string;
            TXT_CONTACT_US_MAIL_SUBJECT: string;
            MSG_EMAIL_SENT: string;
            MSG_ERROR_MANDATORY_FIELDS: string;
            LBL_MORE: string;
            BTN_EXIT_CONTINUE_LATER: string;
            LBL_PHONE_NUMBER: string;
            LBL_SCHEDULE_MESSAGE: string;
            TAB_ROOMS: string;
            LBL_COLLABORATION_ROOM: string;
            LBL_ERROR: string;
            LBL_MINUTES: string;
            LBL_YES: string;
            MSG_WILL_CALLBACK: string;
        }

        interface ITranslate {
            dictionary: { [languangeCode: string]: IMapping }
            strings: IMapping;
        }

        interface IExtensions {
            callbackPageRenderer: ((ctx: Extensions.IExtensionContext, page: JQuery) => JQuery)[];
            chatPageRenderer: ((ctx: Extensions.IExtensionContext, page: JQuery) => JQuery)[];
            contactUsPageRenderer: ((ctx: Extensions.IExtensionContext, page: JQuery) => JQuery)[];
            loaded: Extensions.VoidReturn[];
            pageFooterRenderer: ((ctx: Extensions.IExtensionContext, page: JQuery) => JQuery)[];
            pageHeaderRenderer: ((ctx: Extensions.IExtensionContext, page: JQuery) => JQuery)[];
            pageRenderer: Extensions.PageReturn[];
            sendEmailPageRenderer: ((ctx: Extensions.IExtensionContext, page: JQuery) => JQuery)[];
            uploadPhotosMatrixRenderer: ((ctx: Extensions.IExtensionContext, page: JQuery) => JQuery)[];
        }
    }
}