from flask import Flask,request,g,Response,send_from_directory
from flask_cors import CORS
import json
from json import dumps
import pandas as pd
import numpy as np
import Constant

app = Flask(__name__, template_folder='../StuKG-frontend', static_folder='../static')
# app = Flask(__name__, static_folder='./static',static_url_path='')

CORS(app)


@app.route('/')
def get_index():
    return 'hello'
    # return app.send_static_file('index.html')

@app.route('/test')
def test():
    return 'OK'

@app.route('/xfsj', methods=['POST'])
def get_xfsj():
    data = request.get_data(as_text = True)
    print(data)

    df = pd.read_csv(Constant.FILE_ROOT+ data +'_sum.csv',encoding='utf-8', nrows=10 )
    df = df.drop(['XH'],axis=1)
    x = df.columns.to_list()
    y = df.values.tolist()
    # print(x)
    # print(y)

    return Response(dumps({"x": x, 'y' : y[9]}),
                    mimetype="application/json")

@app.route('/xfsj/hour', methods=['POST'])
def get_xfsj_hour():
    data = request.get_data(as_text = True)
    print(data)

    df = pd.read_csv(Constant.FILE_ROOT+ data+'.csv' ,encoding='utf-8', keep_default_na=False)

    # 各时段消费次数柱状图
    # 按列求和
    df = df.drop(['XH'],axis=1)
    df.loc['sum'] = df.apply(lambda x:x.sum())
    headers = df.columns.to_list()
    x = headers
    y = df.loc['sum'].values.tolist()
    # print(headers)
    # print(y)
    
    # width = 0.5
    # plt.subplot(121)
    # plt.bar(np.arange(len(headers)),df.loc['sum'].to_list(),width)
    # plt.xlabel('时段')
    # plt.ylabel('消费次数')
    # plt.xticks(np.arange(len(headers)),labels=headers)

    # return 'OK'
    

    return Response(dumps({"x": x, 'y' : y}),
                    mimetype="application/json")


if __name__ == '__main__':
    app.run(debug = True)