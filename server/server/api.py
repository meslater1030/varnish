from flask import Flask, Blueprint, jsonify, request, current_app
from random import randint
from json import dumps
from time import sleep

# This api is not currently used byt the demo, but we are keeping it in place for future use

def create_api() -> Blueprint:
    """
    Creates an instance of your API. If you'd like to toggle behavior based on
    command line flags or other inputs, add them as arguments to this function.
    """
    api = Blueprint('api', __name__)

    def error(message: str, status: int = 400) -> (str, int):
        return jsonify({ 'error': message}), status

    return api
