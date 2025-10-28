// 基于第3章.ipynb内容的数据
const chapter3Data = {
    // 正弦余弦曲线数据（第3章示例）
    sineCosine: {
        x: Array.from({length: 256}, (_, i) => -Math.PI + (2 * Math.PI * i) / 255),
        y1: Array.from({length: 256}, (_, i) => Math.sin(-Math.PI + (2 * Math.PI * i) / 255)),
        y2: Array.from({length: 256}, (_, i) => Math.cos(-Math.PI + (2 * Math.PI * i) / 255))
    },
    
    // 阿里巴巴GMV数据（第3章示例）
    alibabaGMV: {
        years: ["FY2013", "FY2014", "FY2015", "FY2016", "FY2017", "FY2018", "FY2019"],
        gmv: [10770, 16780, 24440, 30920, 37670, 48200, 57270]
    },
    
    // 果酱面包配料数据（第3章示例）
    breadIngredients: {
        kinds: ["面粉", "全麦粉", "酵母", "苹果酱", "鸡蛋", "黄油", "盐", "白糖"],
        weight: [250, 150, 4, 250, 50, 30, 4, 20],
        percentages: [35.7, 21.4, 0.6, 35.7, 7.1, 4.3, 0.6, 2.9]
    },
    
    // 数据可视化基础概念数据
    visualizationTypes: {
        labels: ['折线图', '柱状图', '散点图', '饼图', '雷达图', '热力图'],
        usageFrequency: [85, 78, 65, 45, 30, 25],
        complexity: [2, 3, 4, 1, 5, 6]
    },
    
    // 数据分布分析
    dataDistribution: {
        normal: [2.1, 4.2, 8.4, 13.6, 19.1, 22.0, 19.1, 13.6, 8.4, 4.2, 2.1],
        skewed: [45, 32, 28, 22, 18, 15, 12, 10, 8, 6, 4],
        uniform: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
    },
    
    // 相关性分析数据
    correlationData: {
        strongPositive: {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [1.1, 2.2, 3.1, 4.3, 5.2, 6.1, 7.3, 8.2, 9.1, 10.2]
        },
        weakPositive: {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [1.5, 2.8, 2.2, 4.1, 3.8, 5.5, 6.2, 7.8, 8.1, 9.5]
        },
        noCorrelation: {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [8.2, 3.1, 6.4, 2.8, 9.1, 1.5, 7.3, 4.6, 5.9, 3.7]
        }
    },
    
    // 时间序列数据
    timeSeries: {
        categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        sales: [120, 150, 180, 210, 240, 270, 300, 280, 260, 230, 200, 180],
        expenses: [80, 90, 100, 110, 120, 130, 140, 130, 120, 110, 100, 90],
        profit: [40, 60, 80, 100, 120, 140, 160, 150, 140, 120, 100, 90],
        customers: [100, 120, 140, 160, 180, 200, 220, 210, 190, 170, 150, 130]
    },
    
    // 统计指标
    statisticalMeasures: {
        measures: ['平均值', '中位数', '众数', '标准差', '方差', '四分位距'],
        values: [185.8, 180, 120, 58.2, 3387.6, 90],
        importance: [95, 85, 70, 80, 75, 65]
    },
    
    // 数据质量评估
    dataQuality: {
        dimensions: ['完整性', '准确性', '一致性', '时效性', '可靠性'],
        scores: [92, 88, 85, 78, 90],
        weights: [25, 30, 20, 15, 10]
    }
};

// 辅助函数
const dataUtils = {
    // 计算平均值
    calculateMean: (data) => data.reduce((a, b) => a + b, 0) / data.length,
    
    // 计算中位数
    calculateMedian: (data) => {
        const sorted = [...data].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    },
    
    // 计算标准差
    calculateStdDev: (data) => {
        const mean = dataUtils.calculateMean(data);
        const squareDiffs = data.map(value => Math.pow(value - mean, 2));
        return Math.sqrt(dataUtils.calculateMean(squareDiffs));
    },
    
    // 生成随机数据
    generateRandomData: (count, min, max) => {
        return Array.from({length: count}, () => 
            Math.floor(Math.random() * (max - min + 1)) + min
        );
    },
    
    // 格式化数字
    formatNumber: (num, decimals = 2) => {
        return num.toFixed(decimals);
    }
};