FROM --platform=$BUILDPLATFORM docker.io/golang:1.21-alpine3.18 as builder

ARG TARGETOS
ARG TARGETARCH

ENV CGO_ENABLED=0
ENV GO111MODULE=on

ADD . /app
WORKDIR /app

RUN uname -a &&\
    CGO_ENABLED=${CGO_ENABLED} GOOS=${TARGETOS} GOARCH=${TARGETARCH} go build -o main .
######## Start a new stage from scratch #######
FROM docker.io/alpine:3.18.4

RUN apk update && apk add --no-cache bash curl jq
COPY --from=builder /app/main .
# Command to run the executable
CMD ["./main"]