        //Chp 50
        function fillCity() {
            let city
            let citycode = document.getElementById('zip').value
            switch (citycode) {
                case '1':
                    city = 'Karachi'
                    break
                case '2':
                    city = 'Islamabad'
                    break
                case '3':
                    city = 'Quetta'
                    break
            }
            document.getElementById('city').value = city 
            locationv
        }   

        //Chp 51
        function get(i) {
            let fullpara = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo eaque at voluptatem, labore repudiandae id odit animi sed molestias iusto ut vel optio perferendis enim incidunt inventore laborum, nesciunt, voluptas sapiente! Labore, optio cupiditate ducimus nam nesciunt nobis.Vero perspiciatis eius consequuntur esse voluptatem beatae voluptas voluptatum labore ratione earum omnis quam molestias optio numquam tempora, iste velit animi fugiat.Possimus illo fugiat impedit eaque aspernatur obcaecati perspiciatis mollitia eum exercitationem sequi, voluptatum voluptate laboriosam deleniti itaque quasi assumenda ea placeat quibusdam facere cupiditate enim saepe omnis.Assumenda ea magnam ullam quibusdam, ut hic reprehenderit blanditiis aspernatur repudiandae ipsam esse!'
            if (i === 'full') {
                document.getElementById('p').innerHTML = fullpara.slice(0) + `<a href='#' onclick="get('less')">See less</a>`
            } else if (i === 'less') {
                document.getElementById('p').innerHTML = fullpara.slice(0, 160) + `<a href='#' onclick="get('full')">See more</a>`
            }
        }
        let p = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque at voluptatem, labore repudiandae id odit animi sed molestias iusto ut vel optio'
        console.log(p.length);
        console.log('a');
        console.log('dadas', 21312321, 2332421412243);
        console.log('ad');
        console.log();
        
        console.log('clg', 'qdeq');'ddd'

