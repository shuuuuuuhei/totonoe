FROM golang:1.17-alpine

WORKDIR /backend/src

COPY ./backend/src /backend/src
RUN apk upgrade --update && apk --no-cache add git
RUN go mod download
RUN go mod tidy
RUN go get github.com/lib/pq

RUN go build main.go

EXPOSE 80

# CMD ["go", "run", "main.go"]