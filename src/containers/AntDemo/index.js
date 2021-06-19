/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-06-19 19:14:09
*------------------------------------------------------- */

import { Form, Select, InputNumber, Switch, Slider, Button } from 'antd';

// Custom DatePicker that uses Day.js instead of Moment.js

import { SmileFilled } from '@ant-design/icons';

import Link from 'next/link';
import Image from 'next/image';

import DatePicker from 'src/components/Forms/DatePicker';

import classes from './style.module.less';

const FormItem = Form.Item;
const Option = Select.Option;

const content = {
	marginTop: '100px',
};

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const AntDemo = (props) => {
	// const { } = props;

	return (
		<div className={classes.wrapper} style={content}>
			<div className="text-center mb-5">
				<Image src="/vercel.svg" alt="logo" width="100" height="100" />
				<div className={classes.textVal}>@primary-color</div>
				<Link href="#">
					<a className="logo mr-0">
						<SmileFilled size={48} strokeWidth={1} />
					</a>
				</Link>

				<p className="mb-0 mt-3 text-disabled">Welcome to the world !</p>
			</div>
			<div>
				<Form layout="horizontal">
					<FormItem
						label="Input Number"
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 8 }}
					>
						<InputNumber
							size="large"
							min={1}
							max={10}
							style={{ width: 100 }}
							defaultValue={3}
							name="inputNumber"
						/>
					</FormItem>

					<FormItem
						label="Switch"
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 8 }}
					>
						<Switch defaultChecked name="switch" />
					</FormItem>

					<FormItem
						label="Slider"
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 8 }}
					>
						<Slider defaultValue={70} />
					</FormItem>

					<FormItem
						label="Select"
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 8 }}
					>
						<Select
							size="large"
							defaultValue="lucy"
							style={{ width: 192 }}
							name="select"
						>
							<Option value="jack">jack</Option>
							<Option value="lucy">lucy</Option>
							<Option value="disabled" disabled>
								disabled
							</Option>
							<Option value="yiminghe">yiminghe</Option>
						</Select>
					</FormItem>

					<FormItem
						label="DatePicker"
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 8 }}
					>
						<DatePicker size="large" name="startDate" />
					</FormItem>
					<FormItem
						style={{ marginTop: 48 }}
						wrapperCol={{ span: 8, offset: 8 }}
					>
						<Button size="large" type="primary" htmlType="submit">
							OK
						</Button>
						<Button size="large" style={{ marginLeft: 8 }}>
							Cancel
						</Button>
					</FormItem>
				</Form>
			</div>
		</div>
	);
};

AntDemo.propTypes = propTypes;

AntDemo.defaultProps = defaultProps;

export default AntDemo;
