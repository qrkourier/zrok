import {User} from "./model/user.ts";
import {Node} from "@xyflow/react";
import {useEffect, useState} from "react";
import {buildMetrics} from "./model/util.ts";
import {getMetadataApi} from "./model/api.ts";
import {Box, Grid2, Modal, Typography} from "@mui/material";
import {modalStyle} from "./styling/theme.ts";
import MetricsGraph from "./MetricsGraph.tsx";

interface ShareMetricsModalProps {
    close: () => void;
    isOpen: boolean;
    user: User;
    share: Node;
}

const ShareMetricsModal = ({ close, isOpen, user, share }: ShareMetricsModalProps) => {
    const [metrics30, setMetrics30] = useState(buildMetrics([]));
    const [metrics7, setMetrics7] = useState(buildMetrics([]));
    const [metrics1, setMetrics1] = useState(buildMetrics([]));

    useEffect(() => {
        let metadataApi = getMetadataApi(user);
        metadataApi.getShareMetrics({shareToken: share.id})
            .then(d => {
                setMetrics30(buildMetrics(d));
            })
            .catch(e => {
                e.response.json().then(ex => {
                    console.log("shareMetricsModal", ex.message);
                });
            });
        metadataApi.getShareMetrics({shareToken: share.id, duration: "168h"})
            .then(d => {
                setMetrics7(buildMetrics(d));
            })
            .catch(e => {
                e.response.json().then(ex => {
                    console.log("shareMetricsModal", ex.message);
                });
            });
        metadataApi.getShareMetrics({shareToken: share.id, duration: "24h"})
            .then(d => {
                setMetrics1(buildMetrics(d));
            })
            .catch(e => {
                e.response.json().then(ex => {
                    console.log("shareMetricsModal", ex.message);
                });
            });
    }, [isOpen, share]);

    return (
        <Modal open={isOpen} onClose={close}>
            <Box sx={{ ...modalStyle }}>
                <Grid2 container sx={{ flexGrow: 1, p: 1 }} alignItems="center">
                    <Typography variant="h5"><strong>Share Metrics</strong></Typography>
                </Grid2>
                <MetricsGraph title="Last 30 Days" data={metrics30.data} />
                <MetricsGraph title="Last 7 Days" data={metrics7.data} showTime />
                <MetricsGraph title="Last 24 Hours" data={metrics1.data} showTime />
            </Box>
        </Modal>
    );
}

export default ShareMetricsModal;