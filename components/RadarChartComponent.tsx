import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { AnalysisResult } from '../types';

interface Props {
  data: AnalysisResult;
}

const RadarChartComponent: React.FC<Props> = ({ data }) => {
  const chartData = [
    { subject: '色调', A: data.temperature, fullMark: 100 },
    { subject: '明度', A: data.value_score, fullMark: 100 },
    { subject: '彩度', A: data.chroma, fullMark: 100 },
    { subject: '清浊', A: data.clarity, fullMark: 100 },
    { subject: '对比度', A: data.contrast, fullMark: 100 },
  ];

  return (
    <div className="w-full h-64 sm:h-80 bg-white rounded-2xl p-4 flex flex-col items-center justify-center">
        <h4 className="text-sm font-semibold text-gray-500 mb-2 tracking-widest">五维度雷达分析</h4>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#6b7280', fontSize: 12 }} 
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Color Profile"
              dataKey="A"
              stroke="#fbbf24" // Amber-400
              strokeWidth={2}
              fill="#fbbf24"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ResponsiveContainer>
        <p className="text-xs text-gray-400 mt-2">雷达图直观展示您的五维色彩特征分布</p>
    </div>
  );
};

export default RadarChartComponent;