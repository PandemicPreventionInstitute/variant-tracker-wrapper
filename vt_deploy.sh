# This script is used to build the PEER application and deploy it.
# In order to run this script, make sure you are running it from the ppi-peer directory.
# This script also assumes the following are installed and configured on your device:
#   * git
#   * Node.js
#   * Yarn package manager
#   * AWS CLI (including configured access key credentials with S3 and CloudFront full permissions)

# Step 1: Checkout the dev branch and build the source project
git checkout main
git pull # make sure you are building the latest version of the main branch
yarn run build

# Step 2: Upload build folder to S3 using AWS CLI
aws s3 cp build/ s3://ppi-variant-tracker-wrapper/ --recursive --acl public-read

