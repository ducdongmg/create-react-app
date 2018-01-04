#!/bin/bash

set -e

npm link firebase-tools
node scripts/push-to-firebase.js
