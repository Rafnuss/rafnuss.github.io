export const captureConfig = {
  default: {
    waitAfterLoadMs: 1200,
  },
  ornitho2ebird: {
    actions: [
      {
        type: "select-option-by-label-anywhere",
        label: "ornitho.ch",
      },
      {
        type: "wait-for-timeout",
        ms: 1200,
      },
    ],
  },
  "global-rare-bird": {
    url: "https://zoziologie.raphaelnussbaumer.com/global-rare-ebird/?mode=r&r=US&t=1",
    waitAfterLoadMs: 5000,
  },
  "see-your-observations": {
    actions: [
      {
        type: "wait-for-selector",
        selector: "#uploadMyEBirdData",
      },
      {
        type: "set-input-files",
        selector: "#uploadMyEBirdData",
        path: "/Users/rafnuss/Library/CloudStorage/Dropbox/MyEBirdData.csv",
      },
      {
        type: "wait-for-timeout",
        ms: 2500,
      },
    ],
  },
  "research-bird-migration-modeling": {
    waitAfterLoadMs: 3000,
  },
  "research-geolocators-geopressure": {
    waitAfterLoadMs: 2500,
  },
  "research-kenya-bird-trends": {
    url: "https://kenyabirdtrends.co.ke/?mode=Species&species=415",
    waitAfterLoadMs: 3500,
  },
  "research-geolocator-explorer": {
    waitAfterLoadMs: 7000,
  },
};
