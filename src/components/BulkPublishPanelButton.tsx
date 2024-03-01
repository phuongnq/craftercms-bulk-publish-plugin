import * as React from 'react';
import { useIntl } from 'react-intl';
import ToolsPanelListItemButton from '@craftercms/studio-ui/components/ToolsPanelListItemButton';
import { showWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { useDispatch } from 'react-redux';

export function BulkPublishPanelButton() {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  return (
    <ToolsPanelListItemButton
      icon={{ id: '@mui/icons-material/AutoAwesomeMotionOutlined' }}
      onClick={() =>
        dispatch(
          showWidgetDialog({
            title: formatMessage({
              id: 'org.craftercms.bulkpublish.vanilla.DialogTitle',
              defaultMessage: 'Bulk Publish Assets'
            }),
            widget: {
              id: 'org.craftercms.bulkpublish.bulkPublishView'
            }
          })
        )
      }
      title={formatMessage({
        id: 'org.craftercms.bulkpublish.vanilla.bulkPublishTitle',
        defaultMessage: 'Bulk Publish Assets'
      })}
    />
  );
}

export default BulkPublishPanelButton;
