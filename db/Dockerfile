FROM postgres:14
ARG DB_LANG=en_US
RUN localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG $DB_LANG.utf8