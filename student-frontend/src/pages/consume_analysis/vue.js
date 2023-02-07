
class Consume{

    constructor(){
      console.log('consume construct')
    }
  
    onLoad(__this){
      console.log('loading')
  
      __this.$http.get("/consume")
                  .then(({data}) => {
            console.log(data)
                  })
                  .catch(err => {
                    console.log(err);
                      // __this.autoopen('错误', '网络错误,访问超时！');
                  })
    }
  
    xfsj(__this, id){
  
      console.log(id)
  
      let mycharts = __this.$echarts.init(document.getElementById(id));
      mycharts.showLoading();
      
      __this.$http.post("/xfsj",id)
      .then(({data}) => {
  
        mycharts.setOption({
          xAxis: {
            data: data.x,
            name: '时间',
            axisLabel:{
              showMaxLabel:true,
          }
          },
          yAxis: {
            name: '金额/元'
          },
          series: [
            {
              type: 'line',
              data: data.y
            }
          ],
          dataZoom: [
            {
                id: 'dataZoomX',
                type: 'slider',
                xAxisIndex: [0],
                filterMode: 'filter'
            },
        ],
        });
  
        mycharts.hideLoading()
      })
      .catch(err => {
        console.log(err);
        // __this.autoopen('错误', '网络错误,访问超时！');
      })
  
    }
  
    xfsj_hour(__this,id){
      console.log(id)
  
      let mycharts = __this.$echarts.init(document.getElementById(id));
      mycharts.showLoading();
  
      __this.$http.post("/xfsj/hour",id)
      .then(({data}) => {
  
        console.log(data)
  
        mycharts.setOption({
  
          title:{
            text:  '消费时段偏好',
          },
          xAxis: {
            type: 'category',
            data: data.x,
            name: '时段',
            axisLabel:{
              showMaxLabel:true,
          }
          },
          yAxis: {
            type: 'value',
            name: '频数/人次'
          },
          series: [
            {
              type: 'bar',
              data: data.y
            }
          ],
          // dataZoom: [
          //   {
          //       id: 'dataZoomX',
          //       type: 'slider',
          //       xAxisIndex: [0],
          //       filterMode: 'filter'
          //   },
        // ],
        });
  
        mycharts.hideLoading()
      })
      .catch(err => {
        console.log(err);
        // __this.autoopen('错误', '网络错误,访问超时！');
      })
  
    }
  
    analyse_xfsj(__this, id){
  
      console.log(id)
  
      let mycharts = __this.$echarts.init(document.getElementById(id));
      
      let option
      option = {
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '90%',
            min: 0,
            max: 1,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, '#58D9F9'],
                  [0.75, '#7CFFB2'],
                  [1, '#FF6E76']
                ]
              }
            },
            pointer: {
              icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
              length: '50%',
              width: 5,
              // offsetCenter: [0, '-20%'],
              itemStyle: {
              color: 'inherit'
              }
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: 'inherit',
                width: 2
              }
            },
            splitLine: {
              length: 5,
              lineStyle: {
                color: 'inherit',
                width: 3
              }
            },
            axisLabel: {
              color: '#464646',
              fontSize: 20,
              distance: -50,
              rotate: 'tangential',
              formatter: function (value) {
                if (value === 0.875) {
                  return '偏高';
                } else if (value === 0.5) {
                  return '正常';
                } else if (value === 0.125) {
                  return '偏低';
                }
                return '';
              }
            },
            title: {
              offsetCenter: [0, '20%'],
              fontSize: 20
            },
            detail: {
              // fontSize: 20,
              offsetCenter: [0, '-30%'],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100) + '';
              },
              // color: 'inherit'
            },
            data: [
              {
                value: 0.75,
                name: '消费指数'
              }
            ]
          }
        ]
      }
      mycharts.setOption(option)
  
  
    }
  }
  
  
  export default Consume;
  
  // console.log('消费数据')