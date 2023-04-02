from flask import Flask, request, jsonify
import json
from scoringBackend.model import Model

app = Flask(__name__)

# client_creds = {
#     'balanceSent': fields.Double,
#     'balanceReceived': fields.Double,
#     'txnCount': fields.Integer,
#     'incomingTxns': fields.Integer,
#     'outgoingTxns': fields.Integer,

#     'walletsDrained': fields.Integer,
#     'coinbaseWithdrawls': fields.Integer,
#     'binanceWithdrawls': fields.Integer,
#     'scamTokensHeld': fields.Integer,
#     'erc20TokensHeld': fields.Integer,
#     'erc721TokensHeld': fields.Integer,
#     'erc1155TokensHeld': fields.Integer,

#     'isContract': fields.Integer,
#     'isVerified': fields.Integer,

#     'firstTxnTime': fields.DateTime,
#     'lastTxnTime': fields.DateTime,

#     'transactionsPerDay': fields.Integer,
#     'transactionsPerWeek': fields.Integer
# }

model = Model()


@app.route('/', methods=['PUT'])
def evaluate_wallet():
    try:
        json_request = json.loads(request.data)
        model.setValues(json_request)
        return jsonify(model.evaluate())
    except:
        RuntimeError(404, message="failed to evaluate")

app.run(debug=True)