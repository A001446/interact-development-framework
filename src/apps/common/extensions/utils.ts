import { IExtensionContext } from "typed-interact-extension/extensions";

export function getPageName(ctx: IExtensionContext): string {
    const pageName = (ctx.getPage() || ctx.pageElement).pageNavigation.pageReferenceName;
    return pageName.replace(/\s/g, '');
}

export function getLaunchedFlowName(ctx: IExtensionContext): string {
    return ctx.getFlowName();
}

export function getFormattedPageName(ctx: IExtensionContext): string {
    const pageName = getPageName(ctx);
    if (pageName.indexOf("_") > 0) { return pageName; }
    return `${getLaunchedFlowName(ctx)}_${pageName}`;
}
