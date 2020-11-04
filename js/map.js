window.onload = function(){

		//카카오맵에 표시될 DOM지정
		// var container = document.getElementsByClassName('map')[i];
		var container = document.getElementById('map');

		//표시할 지역의 경도, 위도, 줌레벨 설정
		var options = {
			center: new daum.maps.LatLng( 37.5779636,126.9004205 ),
			level: 3
		};

		//map 인스턴스 생성
		var map = new daum.maps.Map(container, options);


		// 마커가 표시될 위치 
		var markerPosition  = new daum.maps.LatLng(37.5779636,126.9004205); 

		// 마커를 생성
		var marker = new daum.maps.Marker({
			position: markerPosition
		});

		// 마커가 지도 위에 표시되도록 설정
		marker.setMap(map);

		//스카이뷰 컨트롤 표시
		var mapTypeControl = new daum.maps.MapTypeControl();
		map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPLEFT);

		//줌 컨트롤 표시
		var zoomControl = new daum.maps.ZoomControl();
		map.addControl(zoomControl, daum.maps.ControlPosition.BOTTOMRIGHT);

		//드래그기능 활성화
		setDraggable(true);           
		function setDraggable(draggable) {
			map.setDraggable(draggable);    
		}

		//줌기능 활성화
		setZoomable(true);
		function setZoomable(zoomable) {          
			map.setZoomable(zoomable);    
		}

		//교통정보 표시
		// map.addOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC);      
		
		

	   
	   
	}