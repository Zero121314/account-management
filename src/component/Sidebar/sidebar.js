import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Sidebar.module.scss';
const cx = classNames.bind(style);
function Sidbar() {
	//  item catalog hover
	const [hoverId, setHoverId] = useState(0);
	// catalog
	const [catalog, setCatalog] = useState([
		{
			id: 1,
			name: 'Thông tin cá nhân',
			path: '/info',
			icon: 'user-black',
			iconActive: 'user-white',
			active: true,
			children: [
				{
					id: 'personal-info',
					name: 'Thông tin cơ bản',
					active: true,
				},
				{
					id: 'contact',
					name: 'Thông tin liên hệ',
					active: false,
				},
				{
					id: 'edu',
					name: 'Thông tin công việc',
					active: false,
				},
			],
		},
		{
			id: 2,
			name: 'Bảo vệ tài khoản',
			path: '/security',
			icon: 'safe-black',
			iconActive: 'safe-white',
			active: false,
			children: [
				{
					id: 'ogin-info',
					name: 'Thông tin đăng nhập',
					active: false,
				},
				{
					id: 'devices',
					name: 'Thiết bị đã đăng nhập',
					active: false,
				},
				{
					id: 'logs',
					name: 'Nhật ký hoạt động',
					active: false,
				},
			],
		},
	]);

	/**
	 * handle mouseenter item
	 * @param {*} event
	 * @param {*} item
	 */
	const handleMouseEnterItem = (event, item) => {
		setHoverId(item.id);
	};
	/**
	 * handle mouseenter item
	 * @param {*} event
	 * @param {*} item
	 */
	const handleMouseLeaveItem = () => {
		setHoverId(0);
	};
	/**
	 * Click catalog parent
	 * @param {*} event
	 * @param {*} item
	 */
	const handleClickItem = (event, item) => {
		catalog.forEach((element) => {
			element.active = false;
		});
		item.active = true;
		item.children.forEach((child) => {
			child.active = false;
		});
		item.children[0].active = true;
		setCatalog([...catalog]);
	};
	/**
	 * Click catalog children
	 * @param {*} item
	 * @param {*} item
	 */
	const handleClickItemChild = (itemChild) => {
		catalog.forEach((item) => {
			item.children.forEach((child) => {
				child.active = false;
			});
		});

		itemChild.active = true;
		setCatalog([...catalog]);
	};

	return (
		<div className={`${cx('sidbar-app')} `}>
			{catalog?.map((item, index) => {
				return (
					<>
						<Link
							to={item.path}
							onMouseEnter={(event) => handleMouseEnterItem(event, item)}
							onMouseLeave={(event) => handleMouseLeaveItem()}
							onClick={(event) => handleClickItem(event, item)}
							key={index}
							className={`${cx(
								'item-catalog',
								item.active || item.id === hoverId ? 'active' : ''
							)} d-flex align-items-center`}
						>
							<div
								className={`${cx(
									'icon-item-catalog',
									item.active || item.id === hoverId ? item.iconActive : item.icon
								)} m-r-8`}
							></div>
							<div className={`${cx('name-item-catalog')} fs-14 bold`}>{item.name}</div>
						</Link>
						{item.active
							? item.children.map((itemChild) => {
									return (
										<a
											href={`#${itemChild.id}`}
											key={itemChild.id}
											onClick={(event) => handleClickItemChild(itemChild)}
											className={`${cx(
												'name-item-catalog-child',
												itemChild.active ? 'active' : ''
											)} fs-13`}
										>
											{itemChild.name}
										</a>
									);
							  })
							: ''}
					</>
				);
			})}
		</div>
	);
}

export default Sidbar;
