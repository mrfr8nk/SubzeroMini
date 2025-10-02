FROM node:20-bullseye
USER root
RUN apt-get update && \
    apt-get install -y ffmpeg webp git && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*
USER node
RUN git clone https://github.com/mrfr8nk/Subzeromini.git /home/node/Subzeromini
WORKDIR /home/node/Subzeromini
RUN chmod -R 777 /home/node/Subzeromini/
RUN yarn install --network-concurrency 1 --ignore-engines
EXPOSE 7860
ENV NODE_ENV=production
CMD ["npm", "start"]
