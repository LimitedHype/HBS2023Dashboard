import numpy as np
from datetime import datetime

class Model:
    def __init__(self):
        self.weights = [0.3, 0.15, -0.2, 0.15, -0.2, 0.1, 0.1, 0.15, 0.1]
        self.dict_vals = []

    def setValues(self, dict_vals: dict):
        self.dict_vals = dict_vals

    def tokenize(self):
        currentBalance = self.dict_vals['balanceReceived'] - self.dict_vals['balanceSent']
        transaction_history_length = self.dict_vals['lastTxnTime'] - self.dict_vals['firstTxnTime'] #credit length of history
        scam_tokens = self.dict_vals['scamTokensHeld'] 
        txn_count = self.dict_vals['txnCount'] # credit utilization
        withdrawls = self.dict_vals['walletsDrained'] + self.dict_vals['coinbaseWithDrawls'] + self.dict_vals['binanceWithDrawls']
        recent_transaction = datetime.now() - self.dict_vals['lastTxnTime']
        txns_per_day = self.dict_vals['transactionsPerDay']
        txns_per_week = self.dict_vals['transactionsPerWeek']
        daysActive = len(self.dict_vals['daysActive'])
        return [currentBalance, transaction_history_length, scam_tokens, txn_count, withdrawls, recent_transaction, txns_per_day, txns_per_week, daysActive]

    def evaluate(self):
        self.tokenize()
        return self.sigmoid(np.dot(self.weights,self.dict_vals))

    def sigmoid(self, x):
        return 1 / (1 + np.exp(-x))

