import React, { Component } from 'react';
import {ResultCard, ReactiveBase, CategorySearch, SingleRange, ReactiveList } from '@appbaseio/reactivesearch';

class App extends Component {
	render() {
		return (
			<ReactiveBase
				app="carstore-dataset"
				credentials="4HWI27QmA:58c731f7-79ab-4f55-a590-7e15c7e36721"
			>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
						<CategorySearch
							componentId="searchbox"
							dataField="model"
							categoryField="brand.keyword"
							placeholder="Search for cars"
							style={{
								padding: '5px',
								marginTop: '10px',
							}}
						/>
						<SingleRange
							componentId="ratingsfilter"
							title="Filter by ratings"
							dataField="rating"
							data={[
								{ start: '4', end: '5', label: '4 stars and up' },
								{ start: '3', end: '5', label: '3 stars and up' },
								{ start: '2', end: '5', label: '2 stars and up' },
								{ start: '1', end: '5', label: 'see all ratings' },
							]}
							defaultValue="4 stars and up"
							style={{
								padding: '5px',
								marginTop: '10px',
							}}
						/>
					</div>
					<ReactiveList
						componentId="result"
						title="Results"
						dataField="model"
						from={0}
						size={6}
						pagination={true}
						react={{
							and: ['searchbox', 'ratingsfilter'],
						}}
						style={{
							width: '60%',
							textAlign: 'center',
						}}
						render={({ data }) => (
							<ReactiveList.ResultCardsWrapper>
								{data.map(item => (
									<ResultCard key={item._id}>
										<ResultCard.Image src="https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png" />
										<ResultCard.Title
											dangerouslySetInnerHTML={{
												__html: item.model,
											}}
										/>
										<ResultCard.Description>
											{item.brand + ' ' + '*'.repeat(item.rating)}
										</ResultCard.Description>
									</ResultCard>
								))}
							</ReactiveList.ResultCardsWrapper>
						)}
					/>
				</div>
			</ReactiveBase>
		);
	}
}

export default App;