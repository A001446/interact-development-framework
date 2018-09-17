// Interact Development Framework
declare namespace IDF {
    namespace Extension {
        type Input = { ctx: Interact.Extensions.IExtensionContext, page: JQuery };
        type VoidOutput = (input: Input) => void;
        type JQueryOutput = (input: Input) => JQuery;
    }
}