# CrafterCMS Bulk Publish Plugin

This creates a CrafterCMS extension that exports Bulk Publish widgets that can be used across Studio UI.

Instructions:
- Run `yarn` on the root
- Run `yarn build` to re-build the plugin bundle once you've done modifications
- Install the plugin from local sources using the CrafterCMS CLI, or using the `/studio/api/2/marketplace/copy` API in Postman or similar. Either way, you can use the following _JSON_ body:

```json
{
  "siteId": "YOUR_SITE_ID",
  "path": "/Users/your/path/to/this/repo"
}
```

The `BulkPublishPanelButton` & `vanilla` widgets are auto installed when using the `marketplace/copy` API. There are however other widgets in `src` directory you can use for inspiration.
Reviewing your site's `ui.xml` you'll find the widgets below. Review the `installation` section of the `craftercms-plugin.yaml` to understand where those widgets come from.

```xml
<widget id="org.craftercms.bulkpublish.bulkPublishPanelButton">
  <plugin id="org.craftercms"
          type="bulkpublish"
          name="library"
          file="index.js"/>
</widget>
```

To learn more on creating plugins in CrafterCMS, see [CrafterCMS plugins documentation](https://docs.craftercms.org/current/by-role/developer/composable/extensions/plugins.html)
