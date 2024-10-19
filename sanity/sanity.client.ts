import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: 'i9yt9c1w',
    dataset: 'production',
    apiVersion: "2024-10-19",
    useCdn: false,
};

const client = createClient(config);

export default client;