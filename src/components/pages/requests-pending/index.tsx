import cn from 'classnames';
import { ContentContainer } from '../../../ui/content-container';
import { ContentHeading } from '../../../ui/content-heading';
import { Table } from '../../../ui/table-native';
import {
  useApproveRequestMutation,
  useDeclineRequestMutation,
  useGetPendingRequestsQuery,
} from '../../../redux-store/api';
import { useAppSelector } from '../../../redux-store/hooks';
import { selectRootShifts } from '../../../redux-store/root-shifts';
import { RequestRow } from '../../request-row';
import { Loader } from '../../../ui/loader';
import { useMemo } from 'react';
import { Alert } from '../../../ui/alert';
import { Button, TButtonProps } from '../../../ui/button';
import { RefreshIcon } from '../../../ui/icons';
import styles from './styles.module.css';
import { withTooltip } from '../../../ui/tooltip';

const ButtonWithTooltip = withTooltip<TButtonProps>(Button);

export const PageRequestsPending = () => {
  const { preparing } = useAppSelector(selectRootShifts);

  if (!preparing) {
    return (
      <ContentContainer extClassName={styles.requests__alert}>
        <Alert
          extClassName={styles.requests__tableAlert}
          title="Заявки не принимаются, пока нет новой смены"
        />
      </ContentContainer>
    );
  }

  const { data, isLoading, isError, isFetching, refetch } = useGetPendingRequestsQuery(
    preparing.id,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const [approveRequest] = useApproveRequestMutation();
  const [declineRequest] = useDeclineRequestMutation();

  const content = useMemo(() => {
    if ((!data || data.length === 0) && (isLoading || isFetching)) {
      return <Loader extClassName={styles.requests__contentLoader} />;
    } else if (data?.length === 0) {
      return <Alert extClassName={styles.requests__contentAlert} title="Новых заявок нет" />;
    } else if (data) {
      return (
        <Table
          header={['Имя и фамилия', 'Город', 'Телефон', 'Дата рождения', '']}
          extClassName={styles.requests__table}
          gridClassName={styles.requests__tableColumns}
          renderRows={(rowStyles) =>
            isLoading || isFetching ? (
              <Loader extClassName={styles.requests__tableLoader} />
            ) : (
              <div className={cn(styles.requests__tableRows, 'custom-scroll')}>
                {data.map((request) => (
                  <RequestRow
                    key={request.id}
                    extClassName={rowStyles}
                    requestData={request}
                    approve={() => approveRequest({ requestId: request.id, shiftId: preparing.id })}
                    decline={() => declineRequest({ requestId: request.id, shiftId: preparing.id })}
                  />
                ))}
              </div>
            )
          }
        />
      );
    }
  }, [data, isLoading, isFetching]);

  return (
    <ContentContainer extClassName={styles.requests}>
      <ContentHeading extClassName={styles.requests__heading} title="Заявки на участие">
        <ButtonWithTooltip
          tooltipEnabled
          tooltipText="Проверить, есть ли новые заявки"
          size="micro"
          htmlType="button"
          type="secondary"
          extClassName={styles.requests__refreshButton}
          onClick={refetch}
        >
          <RefreshIcon type="link-active" />
        </ButtonWithTooltip>
      </ContentHeading>
      {content}
    </ContentContainer>
  );
};
