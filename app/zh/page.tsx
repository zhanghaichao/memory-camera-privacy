import type { Metadata } from 'next';
import Policy from '../policy';
export const metadata: Metadata = { title: '隐私政策 · Memory Camera', description: '了解 Memory Camera 如何处理照片、相机权限、购买信息，以及如何删除数据。隐私联系人：Jocelyn。' };
export default function ChinesePolicy() { return <Policy language="zh" />; }
