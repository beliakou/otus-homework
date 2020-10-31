FROM python:3.8

RUN mkdir /app

COPY ./myapp /app
COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "--reload", "myapp.wsgi"]

