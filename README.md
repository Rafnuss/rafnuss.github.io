# raphaelnussbaumer.com

Personal website for Raphaël Nussbaumer


The deployment includes the Défilé website at `/defile/`, copied from `site/` on this repository’s `defile-site` branch. `Rafnuss/defile-website` publishes that build using a dedicated SSH deploy key; the branch calls the deployment workflow on `main`. The redirect in `public/defileViz/` preserves old links, including query parameters and fragments; deployment also copies it to lowercase `/defileviz/`.
