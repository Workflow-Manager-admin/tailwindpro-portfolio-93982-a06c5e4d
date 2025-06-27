#!/bin/bash
cd /home/kavia/workspace/code-generation/tailwindpro-portfolio-93982-a06c5e4d/frontend_portfolio_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

