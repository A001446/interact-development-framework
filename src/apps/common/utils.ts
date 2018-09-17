export function getPageName(ctx: Interact.Extensions.IExtensionContext): string {
    const pageName = (ctx.page || ctx.pageElement).pageNavigation.pageReferenceName;
    return pageName.replace(/\s/g, '');
}

export async function getLaunchedFlowName(app: Interact.IApplication) {
    const request = new Request(`/interact/version/2/account/${app.cover_protocolManager.accountId}/interaction`);
    const init: RequestInit = {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Application-Key": app.cover_protocolManager.applicationKey,
            "Tenant-Id": app.cover_protocolManager.accountId,
            "Environment-Name": app.environment
        },
        cache: 'no-cache'
    }
    const json = await (await fetch(request, init)).json();
    const interactions: { description: string, id: string, interactionName: string }[] = json.resources.spaces[1].spaceInteractions;
    const interaction = interactions.find(interaction => interaction.id === app.options.autostart.interactionId)
    return interaction ? interaction.interactionName : null;
}