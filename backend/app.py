from flask import Flask, request, jsonify
import pandas as pd
import json

app = Flask(__name__)

@app.route('/api/submit_code', methods=['POST'])
def submit_code():
    user_code = request.json.get('code', None)
    
    if not user_code:
        return jsonify({'error': 'No code provided'}), 400
    
    # Simulated user environment
    try:
        exec(user_code, globals())
        df = pd.read_csv('example.csv')
        if df.head().equals(globals().get('df', None).head()):
            return jsonify({'result': 'Correct'}), 200
        else:
            return jsonify({'result': 'Incorrect'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
