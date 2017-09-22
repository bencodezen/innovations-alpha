import React, { Component } from 'react'

class Main extends Component {
    render() {
        return (
            <div className="super">
            <div className="super-inner">
                <div className="content layout-bi-unequal">
                    <div className="content-groupset pos-alpha">
                        <div className="content-group directory-search">
                            <aside className="filter-group menu is-active">
                                <h2 className="menu-toggle">
                                    Search by bill # or keyword:
                                </h2>
                                <form className="universal-search menu-content" id="search-text">
                                    <fieldset className="">
                                        <label for="searchTermLc">Search Term:</label>
                                        <input type="search" id="searchTermLc" name="searchTermLc" placeholder="Enter Name, #, or Keyword" value="" />
                                        <button id="search-button" disabled="disabled" className="button type-blue" type="submit" onclick="keywordBillSearch()"><span className="icon-text">Search</span> <b className="icon icon-search" aria-hidden="true"></b></button>
                                    </fieldset>
                                </form>
                            </aside>
                        </div>
                        <div className="content-group directory-filter">
                            <aside className="filter-group menu is-active">
                                <h2 className="menu-toggle">Filter Results:</h2>
                                <form className="filter-options menu-content" id="search-filter">
                                    <input type="hidden" id="keyword" name="keyword" value="">
                                    <input type="hidden" id="jurisdiction" name="jurisdiction" value="US">
                                    <input type="hidden" id="currentSession" name="currentSession" value="115">
                                    <fieldset>
                                        <ul className="mt1 lh6 fz3 ">
                                            <li>
                                                <input type="radio" name="legislationFilter" value="federal" checked="" /> Federal Legislation
                                            </li>
                                            <li>
                                                <input type="radio" name="legislationFilter" value="state" /> State Legislation
                                            </li>
                                            <li>
                                                <input type="radio" name="legislationFilter" value="both" /> Both federal and state(s)
                                            </li>
                                        </ul>
                                        <ul className="filter-options-list">
                                        <li id="stateFilterList" className="dn">
                                                <label for="states">
                                                    State(s) <span className="filter-selected">Selected</span>
                                                </label>
                                                <select multiple="" id="states" className="js-chosen" data-show-filter="false">
                                                    <option value="AK">Alaska</option>
                                                    <option value="AL">Alabama</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="AZ">Arizona</option>
                                                    <option value="CA">California</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="CT">Connecticut</option>
                                                    <option value="DC">District of Columbia</option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="HI">Hawaii</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="MA">Massachusetts</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="MS">Mississippi</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NC">North Carolina</option>
                                                    <option value="ND">North Dakota</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NH">New Hampshire</option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="NY">New York</option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="PA">Pennsylvania</option>
                                                    <option value="RI">Rhode Island</option>
                                                    <option value="SC">South Carolina</option>
                                                    <option value="SD">South Dakota</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="UT">Utah</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="WA">Washington</option>
                                                    <option value="WI">Wisconsin</option>
                                                    <option value="WV">West Virginia</option>
                                                    <option value="WY">Wyoming</option>
                                                    </select>
                                            </li>
                                        <li id="congressFilterList" className="">
                                                <label for="congressFilter">Congress</label>
                                                <select multiple="" id="congressFilter" className="js-chosen" data-placeholder="Type or Select a Congress">
                                                    <option selected="" value="115">115th</option>
                                                    <option value="114">114th</option>
                                                    <option value="113">113th</option>
                                                    <option value="112">112th</option>
                                                    <option value="111">111th</option>
                                                    <option value="110">110th</option>
                                                    <option value="109">109th</option>
                                                    <option value="108">108th</option>
                                                    <option value="107">107th</option>
                                                    <option value="106">106th</option>
                                                    <option value="105">105th</option>
                                                    </select>
                                            </li>
                                        <li id="sessionFilterList" className="dn">
                                                <label for="sessionFilter">Session</label>
                                                <select multiple="" id="sessionFilter" className="js-chosen" data-placeholder="Type or Select a Session">
                                                    </select>
                                            </li>
                                            <li id="chamberFilterListItem" className="">
                                                <label for="chamberFilter">Chamber</label>
                                                <select name="chamberFilter" id="chamberFilter" className="directory-filter-select" data-placeholder="Type or Select a Chamber">
                                                    <option selected="" value="">All</option>
                                                    <option value="House">House</option>
                                                    <option value="Senate">Senate</option>
                                                    </select>
                                            </li>
                                            <li id="legislationTypeItemList" className="">
                                                <label for="legislationType">Legislation Type</label>
                                                <select multiple="" name="legislationType" id="legislationType" data-legislation-type="" className="js-chosen" data-placeholder="Type or Select Legislative Type">
                                                    <option value="HR">H.R.</option>
                                                    <option value="HRES">H.RES.</option>
                                                    <option value="HCONRES">H.CON.RES.</option>
                                                    <option value="HJRES">H.J.RES.</option>
                                                    <option value="HAMDT">H.AMDT.</option>
                                                    <option value="HD">House Draft</option>
                                                    <option value="S">S.</option>
                                                    <option value="SRES">S.RES.</option>
                                                    <option value="SCONRES">S.CON.RES.</option>
                                                    <option value="SJRES">S.J.RES.</option>
                                                    <option value="SAMDT">S.AMDT</option>
                                                    <option value="SD">Senate Draft</option>
                                                    <option value="PL">Public Law</option>
                                                    </select>
                                            </li>
                                            <li id="crsIssueAreaListItem" className="">
                                                <label for="crsIssueArea">
                                                    CRS Issue Area
                                                </label>
                                                <a className="token has-tooltip" title="Search for legislation by policy area(s)">?</a>
                                                <select multiple="" name="crsIssueArea" className="js-select2 select2-hidden-accessible" id="crsIssueArea" data-crs-issue-area="" data-placeholder="Type or Select Issue Area" title="Search for roll call votes by policy area(s)." tabindex="-1" aria-hidden="true">
                                                    </select><span className="select2 select2-container select2-container--default" dir="ltr" style="width: 236px;"><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" title="Search for roll call votes by policy area(s)." tabindex="-1"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="Type or Select Issue Area" style="width: 236px;"></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                                <div className="cf">
                                                    <div className="fl">
                                                        <input type="checkbox" name="crs_check" id="crs_check" className="va">
                                                    </div>
                                                    <div className="float-fill filter-options__checkbox-text">
                                                        Only display results which include all selected issue areas
                                                    </div>
                                                </div>
                                            </li>
        
                                            <li id="sponsorFilterList" className="">
                                                <label for="sponsorFilter">
                                                    Sponsor
                                                </label>
                                                <select multiple="" name="sponsorFilter" id="sponsorFilter" data-sponsor="" className="js-select2 select2-hidden-accessible" data-placeholder="Type or Select Sponsor Name" title="Search for legislation by Sponsor Name." tabindex="-1" aria-hidden="true">
                                                    <option value="Rep. Abercrombie, Neil">Rep. Abercrombie, Neil</option>
                                                    <option value="Rep. Ackerman, Gary L.">Rep. Ackerman, Gary L.</option>
                                                    <option value="Rep. Aderholt, Robert B.">Rep. Aderholt, Robert B.</option>
                                                    <option value="Sen. Akaka, Daniel K.">Sen. Akaka, Daniel K.</option>
                                                    <option value="Sen. Allard, Wayne">Sen. Allard, Wayne</option>
                                                    <option value="Sen. Allen, George">Sen. Allen, George</option>
                                                    <option value="Rep. Andrews, Robert E.">Rep. Andrews, Robert E.</option>
                                                    <option value="Rep. Archer, Bill">Rep. Archer, Bill</option>
                                                    <option value="Rep. Armey, Richard K.">Rep. Armey, Richard K.</option>
                                                    <option value="Sen. Abraham, Spencer">Sen. Abraham, Spencer</option>
                                                    <option value="Sen. Ashcroft, John">Sen. Ashcroft, John</option>
                                                    <option value="Rep. Allen, Thomas H.">Rep. Allen, Thomas H.</option>
                                                    <option value="Rep. Akin, W. Todd">Rep. Akin, W. Todd</option>
                                                    <option value="Rep. Acevedo-Vila, Anibal">Rep. Acevedo-Vila, Anibal</option>
                                                    <option value="Sen. Alexander, Lamar">Sen. Alexander, Lamar</option>
                                                    <option value="Rep. Alexander, Rodney">Rep. Alexander, Rodney</option>
                                                    <option value="Rep. Altmire, Jason">Rep. Altmire, Jason</option>
                                                    <option value="Rep. Arcuri, Michael A.">Rep. Arcuri, Michael A.</option>
                                                    <option value="Rep. Adler, John H.">Rep. Adler, John H.</option>
                                                    <option value="Rep. Austria, Steve">Rep. Austria, Steve</option>
                                                    <option value="Rep. Adams, Sandy">Rep. Adams, Sandy</option>
                                                    <option value="Rep. Amash, Justin">Rep. Amash, Justin</option>
                                                    <option value="Sen. Ayotte, Kelly">Sen. Ayotte, Kelly</option>
                                                    <option value="Rep. Amodei, Mark E.">Rep. Amodei, Mark E.</option>
                                                    <option value="Rep. Adams, Alma S.">Rep. Adams, Alma S.</option>
                                                    <option value="Rep. Aguilar, Pete">Rep. Aguilar, Pete</option>
                                                    <option value="Rep. Allen, Rick W.">Rep. Allen, Rick W.</option>
                                                    <option value="Rep. Ashford, Brad">Rep. Ashford, Brad</option>
                                                    <option value="Rep. Abraham, Ralph Lee">Rep. Abraham, Ralph Lee</option>
                                                    <option value="Rep. Arrington, Jodey C.">Rep. Arrington, Jodey C.</option>
                                                    <option value="Rep. Bachus, Spencer">Rep. Bachus, Spencer</option>
                                                    <option value="Rep. Baesler, Scotty">Rep. Baesler, Scotty</option>
                                                    <option value="Rep. Baker, Richard H.">Rep. Baker, Richard H.</option>
                                                    <option value="Rep. Baldacci, John Elias">Rep. Baldacci, John Elias</option>
                                                    <option value="Rep. Ballenger, Cass">Rep. Ballenger, Cass</option>
                                                    <option value="Rep. Barcia, James A.">Rep. Barcia, James A.</option>
                                                    <option value="Rep. Barr, Bob">Rep. Barr, Bob</option>
                                                    <option value="Rep. Barrett, Thomas M.">Rep. Barrett, Thomas M.</option>
                                                    <option value="Rep. Barrett, Bill">Rep. Barrett, Bill</option>
                                                    <option value="Rep. Bartlett, Roscoe G.">Rep. Bartlett, Roscoe G.</option>
                                                    <option value="Rep. Barton, Joe">Rep. Barton, Joe</option>
                                                    <option value="Rep. Bass, Charles F.">Rep. Bass, Charles F.</option>
                                                    <option value="Rep. Bateman, Herbert H.">Rep. Bateman, Herbert H.</option>
                                                    <option value="Sen. Baucus, Max">Sen. Baucus, Max</option>
                                                    <option value="Rep. Becerra, Xavier">Rep. Becerra, Xavier</option>
                                                    <option value="Sen. Bennett, Robert F.">Sen. Bennett, Robert F.</option>
                                                    <option value="Rep. Bentsen, Ken">Rep. Bentsen, Ken</option>
                                                    <option value="Rep. Bereuter, Doug">Rep. Bereuter, Doug</option>
                                                    <option value="Rep. Berman, Howard L.">Rep. Berman, Howard L.</option>
                                                    <option value="Rep. Berry, Marion">Rep. Berry, Marion</option>
                                                    <option value="Sen. Biden, Joseph R., Jr.">Sen. Biden, Joseph R., Jr.</option>
                                                    <option value="Rep. Bilbray, Brian P.">Rep. Bilbray, Brian P.</option>
                                                    <option value="Rep. Bilirakis, Michael">Rep. Bilirakis, Michael</option>
                                                    <option value="Sen. Bingaman, Jeff">Sen. Bingaman, Jeff</option>
                                                    <option value="Rep. Bishop, Sanford D., Jr.">Rep. Bishop, Sanford D., Jr.</option>
                                                    <option value="Rep. Blagojevich, Rod R.">Rep. Blagojevich, Rod R.</option>
                                                    <option value="Rep. Bliley, Tom">Rep. Bliley, Tom</option>
                                                    <option value="Rep. Blumenauer, Earl">Rep. Blumenauer, Earl</option>
                                                    <option value="Sen. Blunt, Roy">Sen. Blunt, Roy</option>
                                                    <option value="Rep. Boehlert, Sherwood">Rep. Boehlert, Sherwood</option>
                                                    <option value="Rep. Boehner, John A.">Rep. Boehner, John A.</option>
                                                    <option value="Sen. Bond, Christopher S.">Sen. Bond, Christopher S.</option>
                                                    <option value="Rep. Bonilla, Henry">Rep. Bonilla, Henry</option>
                                                    <option value="Rep. Bonior, David E.">Rep. Bonior, David E.</option>
                                                    <option value="Rep. Bono, Sonny">Rep. Bono, Sonny</option>
                                                    <option value="Rep. Borski, Robert A.">Rep. Borski, Robert A.</option>
                                                    <option value="Rep. Boswell, Leonard L.">Rep. Boswell, Leonard L.</option>
                                                    <option value="Rep. Boucher, Rick">Rep. Boucher, Rick</option>
                                                    <option value="Sen. Boxer, Barbara">Sen. Boxer, Barbara</option>
                                                    <option value="Rep. Boyd, Allen">Rep. Boyd, Allen</option>
                                                    <option value="Rep. Brady, Kevin">Rep. Brady, Kevin</option>
                                                    <option value="Sen. Breaux, John B.">Sen. Breaux, John B.</option>
                                                    <option value="Rep. Brown, Corrine">Rep. Brown, Corrine</option>
                                                    <option value="Rep. Brown, George E., Jr.">Rep. Brown, George E., Jr.</option>
                                                    <option value="Sen. Brown, Sherrod">Sen. Brown, Sherrod</option>
                                                    <option value="Sen. Brownback, Sam">Sen. Brownback, Sam</option>
                                                    <option value="Sen. Bryan, Richard H.">Sen. Bryan, Richard H.</option>
                                                    <option value="Rep. Bryant, Ed">Rep. Bryant, Ed</option>
                                                    <option value="Sen. Bumpers, Dale">Sen. Bumpers, Dale</option>
                                                    <option value="Sen. Bunning, Jim">Sen. Bunning, Jim</option>
                                                    <option value="Sen. Burns, Conrad R.">Sen. Burns, Conrad R.</option>
                                                    <option value="Sen. Burr, Richard">Sen. Burr, Richard</option>
                                                    <option value="Rep. Burton, Dan">Rep. Burton, Dan</option>
                                                    <option value="Rep. Buyer, Steve">Rep. Buyer, Steve</option>
                                                    <option value="Sen. Byrd, Robert C.">Sen. Byrd, Robert C.</option>
                                                    <option value="Rep. Brady, Robert A.">Rep. Brady, Robert A.</option>
                                                    <option value="Rep. Bono Mack, Mary">Rep. Bono Mack, Mary</option>
                                                    <option value="Rep. Baird, Brian">Rep. Baird, Brian</option>
                                                    <option value="Sen. Baldwin, Tammy">Sen. Baldwin, Tammy</option>
                                                    <option value="Rep. Berkley, Shelley">Rep. Berkley, Shelley</option>
                                                    <option value="Rep. Biggert, Judy">Rep. Biggert, Judy</option>
                                                    <option value="Sen. Bayh, Evan">Sen. Bayh, Evan</option>
                                                    <option value="Rep. Baca, Joe">Rep. Baca, Joe</option>
                                                    <option value="Rep. Brown, Henry E., Jr.">Rep. Brown, Henry E., Jr.</option>
                                                    <option value="Sen. Boozman, John">Sen. Boozman, John</option>
                                                    <option value="Sen. Barkley, Dean M.">Sen. Barkley, Dean M.</option>
                                                    <option value="Rep. Ballance, Frank W., Jr.">Rep. Ballance, Frank W., Jr.</option>
                                                    <option value="Rep. Barrett, J. Gresham">Rep. Barrett, J. Gresham</option>
                                                    <option value="Rep. Beauprez, Bob">Rep. Beauprez, Bob</option>
                                                    <option value="Rep. Bell, Chris">Rep. Bell, Chris</option>
                                                    <option value="Rep. Bishop, Timothy H.">Rep. Bishop, Timothy H.</option>
                                                    <option value="Rep. Blackburn, Marsha">Rep. Blackburn, Marsha</option>
                                                    <option value="Rep. Bonner, Jo">Rep. Bonner, Jo</option>
                                                    <option value="Rep. Bordallo, Madeleine Z.">Rep. Bordallo, Madeleine Z.</option>
                                                    <option value="Rep. Bradley, Jeb">Rep. Bradley, Jeb</option>
                                                    <option value="Rep. Brown-Waite, Ginny">Rep. Brown-Waite, Ginny</option>
                                                    <option value="Rep. Burgess, Michael C.">Rep. Burgess, Michael C.</option>
                                                    <option value="Rep. Burns, Max">Rep. Burns, Max</option>
                                                    <option value="Rep. Bishop, Rob">Rep. Bishop, Rob</option>
                                                    <option value="Rep. Butterfield, G. K.">Rep. Butterfield, G. K.</option>
                                                    <option value="Rep. Barrow, John">Rep. Barrow, John</option>
                                                    <option value="Rep. Bean, Melissa L.">Rep. Bean, Melissa L.</option>
                                                    <option value="Rep. Boren, Dan">Rep. Boren, Dan</option>
                                                    <option value="Rep. Boustany, Charles W., Jr.">Rep. Boustany, Charles W., Jr.</option>
                                                    <option value="Rep. Bachmann, Michele">Rep. Bachmann, Michele</option>
                                                    <option value="Rep. Bilirakis, Gus M.">Rep. Bilirakis, Gus M.</option>
                                                    <option value="Rep. Boyda, Nancy E.">Rep. Boyda, Nancy E.</option>
                                                    <option value="Rep. Braley, Bruce L.">Rep. Braley, Bruce L.</option>
                                                    <option value="Rep. Buchanan, Vern">Rep. Buchanan, Vern</option>
                                                    <option value="Sen. Barrasso, John">Sen. Barrasso, John</option>
                                                    <option value="Rep. Broun, Paul C.">Rep. Broun, Paul C.</option>
                                                    <option value="Rep. Boccieri, John A.">Rep. Boccieri, John A.</option>
                                                    <option value="Rep. Bright, Bobby">Rep. Bright, Bobby</option>
                                                    <option value="Sen. Begich, Mark">Sen. Begich, Mark</option>
                                                    <option value="Sen. Burris, Roland">Sen. Burris, Roland</option>
                                                    <option value="Sen. Bennet, Michael F.">Sen. Bennet, Michael F.</option>
                                                    <option value="Sen. Brown, Scott P.">Sen. Brown, Scott P.</option>
                                                    <option value="Rep. Barletta, Lou">Rep. Barletta, Lou</option>
                                                    <option value="Rep. Bass, Karen">Rep. Bass, Karen</option>
                                                    <option value="Rep. Benishek, Dan">Rep. Benishek, Dan</option>
                                                    <option value="Rep. Berg, Rick">Rep. Berg, Rick</option>
                                                    <option value="Rep. Black, Diane">Rep. Black, Diane</option>
                                                    <option value="Rep. Brooks, Mo">Rep. Brooks, Mo</option>
                                                    <option value="Rep. Bucshon, Larry">Rep. Bucshon, Larry</option>
                                                    <option value="Rep. Buerkle, Ann Marie">Rep. Buerkle, Ann Marie</option>
                                                    <option value="Sen. Blumenthal, Richard">Sen. Blumenthal, Richard</option>
                                                    <option value="Rep. Bonamici, Suzanne">Rep. Bonamici, Suzanne</option>
                                                    <option value="Rep. Barber, Ron">Rep. Barber, Ron</option>
                                                    <option value="Rep. Bentivolio, Kerry L.">Rep. Bentivolio, Kerry L.</option>
                                                    <option value="Rep. Beatty, Joyce">Rep. Beatty, Joyce</option>
                                                    <option value="Rep. Barr, Andy">Rep. Barr, Andy</option>
                                                    <option value="Rep. Bridenstine, Jim">Rep. Bridenstine, Jim</option>
                                                    <option value="Rep. Brooks, Susan W.">Rep. Brooks, Susan W.</option>
                                                    <option value="Rep. Brownley, Julia">Rep. Brownley, Julia</option>
                                                    <option value="Rep. Bustos, Cheri">Rep. Bustos, Cheri</option>
                                                    <option value="Rep. Bera, Ami">Rep. Bera, Ami</option>
                                                    <option value="Sen. Booker, Cory A.">Sen. Booker, Cory A.</option>
                                                    <option value="Rep. Byrne, Bradley">Rep. Byrne, Bradley</option>
                                                    <option value="Rep. Brat, Dave">Rep. Brat, Dave</option>
                                                    <option value="Rep. Babin, Brian">Rep. Babin, Brian</option>
                                                    <option value="Rep. Beyer, Donald S., Jr.">Rep. Beyer, Donald S., Jr.</option>
                                                    <option value="Rep. Bishop, Mike">Rep. Bishop, Mike</option>
                                                    <option value="Rep. Blum, Rod">Rep. Blum, Rod</option>
                                                    <option value="Rep. Bost, Mike">Rep. Bost, Mike</option>
                                                    <option value="Rep. Boyle, Brendan F.">Rep. Boyle, Brendan F.</option>
                                                    <option value="Rep. Buck, Ken">Rep. Buck, Ken</option>
                                                    <option value="Rep. Bacon, Don">Rep. Bacon, Don</option>
                                                    <option value="Rep. Banks, Jim">Rep. Banks, Jim</option>
                                                    <option value="Rep. Barragan, Nanette Diaz">Rep. Barragan, Nanette Diaz</option>
                                                    <option value="Rep. Bergman, Jack">Rep. Bergman, Jack</option>
                                                    <option value="Rep. Biggs, Andy">Rep. Biggs, Andy</option>
                                                    <option value="Rep. Blunt Rochester, Lisa">Rep. Blunt Rochester, Lisa</option>
                                                    <option value="Rep. Brown, Anthony G.">Rep. Brown, Anthony G.</option>
                                                    <option value="Rep. Budd, Ted">Rep. Budd, Ted</option>
                                                    <option value="Rep. Callahan, Sonny">Rep. Callahan, Sonny</option>
                                                    <option value="Rep. Calvert, Ken">Rep. Calvert, Ken</option>
                                                    <option value="Rep. Camp, Dave">Rep. Camp, Dave</option>
                                                    <option value="Sen. Campbell, Ben Nighthorse">Sen. Campbell, Ben Nighthorse</option>
                                                    <option value="Rep. Campbell, Tom">Rep. Campbell, Tom</option>
                                                    <option value="Rep. Canady, Charles T.">Rep. Canady, Charles T.</option>
                                                    <option value="Rep. Cannon, Chris">Rep. Cannon, Chris</option>
                                                    <option value="Sen. Cantwell, Maria">Sen. Cantwell, Maria</option>
                                                    <option value="Rep. Capps, Walter">Rep. Capps, Walter</option>
                                                    <option value="Sen. Cardin, Benjamin L.">Sen. Cardin, Benjamin L.</option>
                                                    <option value="Sen. Carper, Thomas R.">Sen. Carper, Thomas R.</option>
                                                    <option value="Rep. Carson, Julia">Rep. Carson, Julia</option>
                                                    <option value="Rep. Castle, Michael N.">Rep. Castle, Michael N.</option>
                                                    <option value="Rep. Chabot, Steve">Rep. Chabot, Steve</option>
                                                    <option value="Sen. Chafee, John H.">Sen. Chafee, John H.</option>
                                                    <option value="Sen. Chambliss, Saxby">Sen. Chambliss, Saxby</option>
                                                    <option value="Rep. Chenoweth-Hage, Helen">Rep. Chenoweth-Hage, Helen</option>
                                                    <option value="Rep. Christensen, Jon">Rep. Christensen, Jon</option>
                                                    <option value="Rep. Christensen, Donna M.">Rep. Christensen, Donna M.</option>
                                                    <option value="Rep. Clay, William (Bill)">Rep. Clay, William (Bill)</option>
                                                    <option value="Rep. Clayton, Eva M.">Rep. Clayton, Eva M.</option>
                                                    <option value="Rep. Clement, Bob">Rep. Clement, Bob</option>
                                                    <option value="Rep. Clyburn, James E.">Rep. Clyburn, James E.</option>
                                                    <option value="Sen. Coats, Daniel">Sen. Coats, Daniel</option>
                                                    <option value="Rep. Coble, Howard">Rep. Coble, Howard</option>
                                                    <option value="Sen. Coburn, Tom">Sen. Coburn, Tom</option>
                                                    <option value="Sen. Cochran, Thad">Sen. Cochran, Thad</option>
                                                    <option value="Rep. Collins, Mac">Rep. Collins, Mac</option>
                                                    <option value="Rep. Combest, Larry">Rep. Combest, Larry</option>
                                                    <option value="Rep. Condit, Gary A.">Rep. Condit, Gary A.</option>
                                                    <option value="Sen. Conrad, Kent">Sen. Conrad, Kent</option>
                                                    <option value="Rep. Conyers, John, Jr.">Rep. Conyers, John, Jr.</option>
                                                    <option value="Rep. Cook, Merrill">Rep. Cook, Merrill</option>
                                                    <option value="Rep. Cooksey, John">Rep. Cooksey, John</option>
                                                    <option value="Rep. Cooper, Jim">Rep. Cooper, Jim</option>
                                                    <option value="Rep. Costello, Jerry F.">Rep. Costello, Jerry F.</option>
                                                    <option value="Sen. Coverdell, Paul">Sen. Coverdell, Paul</option>
                                                    <option value="Rep. Cox, Christopher">Rep. Cox, Christopher</option>
                                                    <option value="Rep. Coyne, William J.">Rep. Coyne, William J.</option>
                                                    <option value="Sen. Craig, Larry E.">Sen. Craig, Larry E.</option>
                                                    <option value="Rep. Cramer, Robert E. (Bud), Jr.">Rep. Cramer, Robert E. (Bud), Jr.</option>
                                                    <option value="Rep. Crane, Philip M.">Rep. Crane, Philip M.</option>
                                                    <option value="Sen. Crapo, Mike">Sen. Crapo, Mike</option>
                                                    <option value="Rep. Cubin, Barbara">Rep. Cubin, Barbara</option>
                                                    <option value="Rep. Cummings, Elijah E.">Rep. Cummings, Elijah E.</option>
                                                    <option value="Rep. Cunningham, Randy (Duke)">Rep. Cunningham, Randy (Duke)</option>
                                                    <option value="Sen. Cleland, Max">Sen. Cleland, Max</option>
                                                    <option value="Sen. Collins, Susan M.">Sen. Collins, Susan M.</option>
                                                    <option value="Rep. Capps, Lois">Rep. Capps, Lois</option>
                                                    <option value="Rep. Capuano, Michael E.">Rep. Capuano, Michael E.</option>
                                                    <option value="Rep. Crowley, Joseph">Rep. Crowley, Joseph</option>
                                                    <option value="Sen. Chafee, Lincoln">Sen. Chafee, Lincoln</option>
                                                    <option value="Sen. Clinton, Hillary Rodham">Sen. Clinton, Hillary Rodham</option>
                                                    <option value="Sen. Corzine, Jon S.">Sen. Corzine, Jon S.</option>
                                                    <option value="Sen. Carnahan, Jean">Sen. Carnahan, Jean</option>
                                                    <option value="Rep. Carson, Brad">Rep. Carson, Brad</option>
                                                    <option value="Rep. Crenshaw, Ander">Rep. Crenshaw, Ander</option>
                                                    <option value="Rep. Cantor, Eric">Rep. Cantor, Eric</option>
                                                    <option value="Sen. Capito, Shelley Moore">Sen. Capito, Shelley Moore</option>
                                                    <option value="Rep. Culberson, John Abney">Rep. Culberson, John Abney</option>
                                                    <option value="Rep. Clay, Wm. Lacy">Rep. Clay, Wm. Lacy</option>
                                                    <option value="Rep. Cardoza, Dennis A.">Rep. Cardoza, Dennis A.</option>
                                                    <option value="Rep. Carter, John R.">Rep. Carter, John R.</option>
                                                    <option value="Rep. Chocola, Chris">Rep. Chocola, Chris</option>
                                                    <option value="Rep. Cole, Tom">Rep. Cole, Tom</option>
                                                    <option value="Rep. Case, Ed">Rep. Case, Ed</option>
                                                    <option value="Sen. Cornyn, John">Sen. Cornyn, John</option>
                                                    <option value="Sen. Coleman, Norm">Sen. Coleman, Norm</option>
                                                    <option value="Rep. Chandler, Ben">Rep. Chandler, Ben</option>
                                                    <option value="Rep. Costa, Jim">Rep. Costa, Jim</option>
                                                    <option value="Rep. Carnahan, Russ">Rep. Carnahan, Russ</option>
                                                    <option value="Rep. Cleaver, Emanuel">Rep. Cleaver, Emanuel</option>
                                                    <option value="Rep. Conaway, K. Michael">Rep. Conaway, K. Michael</option>
                                                    <option value="Rep. Cuellar, Henry">Rep. Cuellar, Henry</option>
                                                    <option value="Rep. Campbell, John">Rep. Campbell, John</option>
                                                    <option value="Rep. Carney, Christopher P.">Rep. Carney, Christopher P.</option>
                                                    <option value="Rep. Castor, Kathy">Rep. Castor, Kathy</option>
                                                    <option value="Rep. Clarke, Yvette D.">Rep. Clarke, Yvette D.</option>
                                                    <option value="Rep. Cohen, Steve">Rep. Cohen, Steve</option>
                                                    <option value="Rep. Courtney, Joe">Rep. Courtney, Joe</option>
                                                    <option value="Sen. Casey, Robert P., Jr.">Sen. Casey, Robert P., Jr.</option>
                                                    <option value="Sen. Corker, Bob">Sen. Corker, Bob</option>
                                                    <option value="Rep. Carson, Andre">Rep. Carson, Andre</option>
                                                    <option value="Rep. Cazayoux, Donald J., Jr.">Rep. Cazayoux, Donald J., Jr.</option>
                                                    <option value="Rep. Childers, Travis">Rep. Childers, Travis</option>
                                                    <option value="Sen. Cassidy, Bill">Sen. Cassidy, Bill</option>
                                                    <option value="Rep. Chaffetz, Jason">Rep. Chaffetz, Jason</option>
                                                    <option value="Rep. Coffman, Mike">Rep. Coffman, Mike</option>
                                                    <option value="Rep. Connolly, Gerald E.">Rep. Connolly, Gerald E.</option>
                                                    <option value="Rep. Cao, Anh &quot;Joseph&quot;">Rep. Cao, Anh "Joseph"</option>
                                                    <option value="Rep. Chu, Judy">Rep. Chu, Judy</option>
                                                    <option value="Rep. Critz, Mark S.">Rep. Critz, Mark S.</option>
                                                    <option value="Rep. Canseco, Francisco &quot;Quico&quot;">Rep. Canseco, Francisco "Quico"</option>
                                                    <option value="Rep. Carney, John C., Jr.">Rep. Carney, John C., Jr.</option>
                                                    <option value="Rep. Cicilline, David N.">Rep. Cicilline, David N.</option>
                                                    <option value="Rep. Clarke, Hansen">Rep. Clarke, Hansen</option>
                                                    <option value="Rep. Cravaack, Chip">Rep. Cravaack, Chip</option>
                                                    <option value="Rep. Crawford, Eric A. &quot;Rick&quot;">Rep. Crawford, Eric A. "Rick"</option>
                                                    <option value="Sen. Coons, Christopher A.">Sen. Coons, Christopher A.</option>
                                                    <option value="Rep. Curson, David Alan">Rep. Curson, David Alan</option>
                                                    <option value="Rep. Cartwright, Matt">Rep. Cartwright, Matt</option>
                                                    <option value="Rep. Castro, Joaquin">Rep. Castro, Joaquin</option>
                                                    <option value="Rep. Collins, Chris">Rep. Collins, Chris</option>
                                                    <option value="Rep. Collins, Doug">Rep. Collins, Doug</option>
                                                    <option value="Rep. Cook, Paul">Rep. Cook, Paul</option>
                                                    <option value="Sen. Cotton, Tom">Sen. Cotton, Tom</option>
                                                    <option value="Rep. Cramer, Kevin">Rep. Cramer, Kevin</option>
                                                    <option value="Rep. Cardenas, Tony">Rep. Cardenas, Tony</option>
                                                    <option value="Sen. Cruz, Ted">Sen. Cruz, Ted</option>
                                                    <option value="Sen. Cowan, William M.">Sen. Cowan, William M.</option>
                                                    <option value="Sen. Chiesa, Jeff">Sen. Chiesa, Jeff</option>
                                                    <option value="Rep. Clark, Katherine M.">Rep. Clark, Katherine M.</option>
                                                    <option value="Rep. Clawson, Curt">Rep. Clawson, Curt</option>
                                                    <option value="Rep. Carter, Earl L. &quot;Buddy&quot;">Rep. Carter, Earl L. "Buddy"</option>
                                                    <option value="Rep. Comstock, Barbara">Rep. Comstock, Barbara</option>
                                                    <option value="Rep. Costello, Ryan A.">Rep. Costello, Ryan A.</option>
                                                    <option value="Rep. Curbelo, Carlos">Rep. Curbelo, Carlos</option>
                                                    <option value="Rep. Comer, James">Rep. Comer, James</option>
                                                    <option value="Rep. Cheney, Liz">Rep. Cheney, Liz</option>
                                                    <option value="Rep. Correa, J. Luis">Rep. Correa, J. Luis</option>
                                                    <option value="Rep. Crist, Charlie">Rep. Crist, Charlie</option>
                                                    <option value="Rep. Carbajal, Salud O.">Rep. Carbajal, Salud O.</option>
                                                    <option value="Sen. Cortez Masto, Catherine">Sen. Cortez Masto, Catherine</option>
                                                    <option value="Sen. D" amato,="" alfonse'="">Sen. D'Amato, Alfonse</option>
                                                    <option value="Rep. Danner, Pat">Rep. Danner, Pat</option>
                                                    <option value="Sen. Daschle, Thomas A.">Sen. Daschle, Thomas A.</option>
                                                    <option value="Rep. Davis, Danny K.">Rep. Davis, Danny K.</option>
                                                    <option value="Rep. Davis, Jim">Rep. Davis, Jim</option>
                                                    <option value="Rep. Davis, Tom">Rep. Davis, Tom</option>
                                                    <option value="Rep. Deal, Nathan">Rep. Deal, Nathan</option>
                                                    <option value="Rep. DeFazio, Peter A.">Rep. DeFazio, Peter A.</option>
                                                    <option value="Rep. DeGette, Diana">Rep. DeGette, Diana</option>
                                                    <option value="Rep. Delahunt, William D.">Rep. Delahunt, William D.</option>
                                                    <option value="Rep. DeLauro, Rosa L.">Rep. DeLauro, Rosa L.</option>
                                                    <option value="Rep. DeLay, Tom">Rep. DeLay, Tom</option>
                                                    <option value="Rep. Dellums, Ronald V.">Rep. Dellums, Ronald V.</option>
                                                    <option value="Rep. Deutsch, Peter">Rep. Deutsch, Peter</option>
                                                    <option value="Sen. DeWine, Mike">Sen. DeWine, Mike</option>
                                                    <option value="Rep. Diaz-Balart, Lincoln">Rep. Diaz-Balart, Lincoln</option>
                                                    <option value="Rep. Dickey, Jay">Rep. Dickey, Jay</option>
                                                    <option value="Rep. Dicks, Norman D.">Rep. Dicks, Norman D.</option>
                                                    <option value="Rep. Dingell, John D.">Rep. Dingell, John D.</option>
                                                    <option value="Rep. Dixon, Julian C.">Rep. Dixon, Julian C.</option>
                                                    <option value="Sen. Dodd, Christopher J.">Sen. Dodd, Christopher J.</option>
                                                    <option value="Rep. Doggett, Lloyd">Rep. Doggett, Lloyd</option>
                                                    <option value="Sen. Domenici, Pete V.">Sen. Domenici, Pete V.</option>
                                                    <option value="Rep. Dooley, Calvin M.">Rep. Dooley, Calvin M.</option>
                                                    <option value="Rep. Doolittle, John T.">Rep. Doolittle, John T.</option>
                                                    <option value="Sen. Dorgan, Byron L.">Sen. Dorgan, Byron L.</option>
                                                    <option value="Rep. Doyle, Michael F.">Rep. Doyle, Michael F.</option>
                                                    <option value="Rep. Dreier, David">Rep. Dreier, David</option>
                                                    <option value="Rep. Duncan, John J., Jr.">Rep. Duncan, John J., Jr.</option>
                                                    <option value="Rep. Dunn, Jennifer">Rep. Dunn, Jennifer</option>
                                                    <option value="Sen. Durbin, Richard J.">Sen. Durbin, Richard J.</option>
                                                    <option value="Sen. DeMint, Jim">Sen. DeMint, Jim</option>
                                                    <option value="Sen. Dayton, Mark">Sen. Dayton, Mark</option>
                                                    <option value="Rep. Davis, Jo Ann">Rep. Davis, Jo Ann</option>
                                                    <option value="Rep. Davis, Susan A.">Rep. Davis, Susan A.</option>
                                                    <option value="Rep. Davis, Lincoln">Rep. Davis, Lincoln</option>
                                                    <option value="Rep. Diaz-Balart, Mario">Rep. Diaz-Balart, Mario</option>
                                                    <option value="Sen. Dole, Elizabeth">Sen. Dole, Elizabeth</option>
                                                    <option value="Rep. Davis, Artur">Rep. Davis, Artur</option>
                                                    <option value="Rep. Davis, Geoff">Rep. Davis, Geoff</option>
                                                    <option value="Rep. Dent, Charles W.">Rep. Dent, Charles W.</option>
                                                    <option value="Rep. Drake, Thelma D.">Rep. Drake, Thelma D.</option>
                                                    <option value="Rep. Davis, David">Rep. Davis, David</option>
                                                    <option value="Sen. Donnelly, Joe">Sen. Donnelly, Joe</option>
                                                    <option value="Rep. Dahlkemper, Kathleen A.">Rep. Dahlkemper, Kathleen A.</option>
                                                    <option value="Rep. Driehaus, Steve">Rep. Driehaus, Steve</option>
                                                    <option value="Rep. Deutch, Theodore E.">Rep. Deutch, Theodore E.</option>
                                                    <option value="Rep. Djou, Charles K.">Rep. Djou, Charles K.</option>
                                                    <option value="Rep. Denham, Jeff">Rep. Denham, Jeff</option>
                                                    <option value="Rep. Dold, Robert J.">Rep. Dold, Robert J.</option>
                                                    <option value="Rep. Duffy, Sean P.">Rep. Duffy, Sean P.</option>
                                                    <option value="Rep. Duncan, Jeff">Rep. Duncan, Jeff</option>
                                                    <option value="Rep. DesJarlais, Scott">Rep. DesJarlais, Scott</option>
                                                    <option value="Rep. DelBene, Suzan K.">Rep. DelBene, Suzan K.</option>
                                                    <option value="Sen. Daines, Steve">Sen. Daines, Steve</option>
                                                    <option value="Rep. Davis, Rodney">Rep. Davis, Rodney</option>
                                                    <option value="Rep. Delaney, John K.">Rep. Delaney, John K.</option>
                                                    <option value="Rep. DeSantis, Ron">Rep. DeSantis, Ron</option>
                                                    <option value="Sen. Duckworth, Tammy">Sen. Duckworth, Tammy</option>
                                                    <option value="Rep. DeSaulnier, Mark">Rep. DeSaulnier, Mark</option>
                                                    <option value="Rep. Dingell, Debbie">Rep. Dingell, Debbie</option>
                                                    <option value="Rep. Donovan, Daniel M., Jr.">Rep. Donovan, Daniel M., Jr.</option>
                                                    <option value="Rep. Davidson, Warren">Rep. Davidson, Warren</option>
                                                    <option value="Rep. Demings, Val Butler">Rep. Demings, Val Butler</option>
                                                    <option value="Rep. Dunn, Neal P.">Rep. Dunn, Neal P.</option>
                                                    <option value="Rep. Edwards, Chet">Rep. Edwards, Chet</option>
                                                    <option value="Rep. Ehlers, Vernon J.">Rep. Ehlers, Vernon J.</option>
                                                    <option value="Rep. Ehrlich, Robert L., Jr.">Rep. Ehrlich, Robert L., Jr.</option>
                                                    <option value="Rep. Emerson, Jo Ann">Rep. Emerson, Jo Ann</option>
                                                    <option value="Rep. Engel, Eliot L.">Rep. Engel, Eliot L.</option>
                                                    <option value="Rep. English, Phil">Rep. English, Phil</option>
                                                    <option value="Sen. Ensign, John">Sen. Ensign, John</option>
                                                    <option value="Rep. Eshoo, Anna G.">Rep. Eshoo, Anna G.</option>
                                                    <option value="Rep. Etheridge, Bob">Rep. Etheridge, Bob</option>
                                                    <option value="Rep. Evans, Lane">Rep. Evans, Lane</option>
                                                    <option value="Rep. Everett, Terry">Rep. Everett, Terry</option>
                                                    <option value="Rep. Ewing, Thomas W.">Rep. Ewing, Thomas W.</option>
                                                    <option value="Sen. Enzi, Michael B.">Sen. Enzi, Michael B.</option>
                                                    <option value="Sen. Edwards, John">Sen. Edwards, John</option>
                                                    <option value="Rep. Emanuel, Rahm">Rep. Emanuel, Rahm</option>
                                                    <option value="Rep. Ellison, Keith">Rep. Ellison, Keith</option>
                                                    <option value="Rep. Ellsworth, Brad">Rep. Ellsworth, Brad</option>
                                                    <option value="Rep. Edwards, Donna F.">Rep. Edwards, Donna F.</option>
                                                    <option value="Rep. Ellmers, Renee L.">Rep. Ellmers, Renee L.</option>
                                                    <option value="Rep. Enyart, William L.">Rep. Enyart, William L.</option>
                                                    <option value="Rep. Esty, Elizabeth H.">Rep. Esty, Elizabeth H.</option>
                                                    <option value="Rep. Emmer, Tom">Rep. Emmer, Tom</option>
                                                    <option value="Sen. Ernst, Joni">Sen. Ernst, Joni</option>
                                                    <option value="Rep. Evans, Dwight">Rep. Evans, Dwight</option>
                                                    <option value="Rep. Espaillat, Adriano">Rep. Espaillat, Adriano</option>
                                                    <option value="Rep. Estes, Ron">Rep. Estes, Ron</option>
                                                    <option value="Rep. Faleomavaega, Eni F. H.">Rep. Faleomavaega, Eni F. H.</option>
                                                    <option value="Rep. Farr, Sam">Rep. Farr, Sam</option>
                                                    <option value="Rep. Fattah, Chaka">Rep. Fattah, Chaka</option>
                                                    <option value="Rep. Fawell, Harris W.">Rep. Fawell, Harris W.</option>
                                                    <option value="Rep. Fazio, Vic">Rep. Fazio, Vic</option>
                                                    <option value="Sen. Feingold, Russell D.">Sen. Feingold, Russell D.</option>
                                                    <option value="Sen. Feinstein, Dianne">Sen. Feinstein, Dianne</option>
                                                    <option value="Rep. Filner, Bob">Rep. Filner, Bob</option>
                                                    <option value="Rep. Flake, Floyd H.">Rep. Flake, Floyd H.</option>
                                                    <option value="Rep. Foglietta, Thomas M.">Rep. Foglietta, Thomas M.</option>
                                                    <option value="Rep. Foley, Mark">Rep. Foley, Mark</option>
                                                    <option value="Rep. Forbes, Michael P.">Rep. Forbes, Michael P.</option>
                                                    <option value="Rep. Ford, Harold E., Jr.">Rep. Ford, Harold E., Jr.</option>
                                                    <option value="Sen. Ford, Wendell H.">Sen. Ford, Wendell H.</option>
                                                    <option value="Rep. Fowler, Tillie">Rep. Fowler, Tillie</option>
                                                    <option value="Rep. Fox, Jon D.">Rep. Fox, Jon D.</option>
                                                    <option value="Rep. Frank, Barney">Rep. Frank, Barney</option>
                                                    <option value="Rep. Franks, Bob">Rep. Franks, Bob</option>
                                                    <option value="Rep. Frelinghuysen, Rodney P.">Rep. Frelinghuysen, Rodney P.</option>
                                                    <option value="Rep. Frost, Martin">Rep. Frost, Martin</option>
                                                    <option value="Rep. Furse, Elizabeth">Rep. Furse, Elizabeth</option>
                                                    <option value="Sen. Faircloth, Lauch">Sen. Faircloth, Lauch</option>
                                                    <option value="Sen. Frist, William H.">Sen. Frist, William H.</option>
                                                    <option value="Rep. Fossella, Vito">Rep. Fossella, Vito</option>
                                                    <option value="Rep. Fletcher, Ernie">Rep. Fletcher, Ernie</option>
                                                    <option value="Sen. Fitzgerald, Peter">Sen. Fitzgerald, Peter</option>
                                                    <option value="Rep. Ferguson, Mike">Rep. Ferguson, Mike</option>
                                                    <option value="Sen. Flake, Jeff">Sen. Flake, Jeff</option>
                                                    <option value="Rep. Forbes, J. Randy">Rep. Forbes, J. Randy</option>
                                                    <option value="Rep. Feeney, Tom">Rep. Feeney, Tom</option>
                                                    <option value="Rep. Franks, Trent">Rep. Franks, Trent</option>
                                                    <option value="Rep. Fortenberry, Jeff">Rep. Fortenberry, Jeff</option>
                                                    <option value="Rep. Foxx, Virginia">Rep. Foxx, Virginia</option>
                                                    <option value="Rep. Fitzpatrick, Michael G.">Rep. Fitzpatrick, Michael G.</option>
                                                    <option value="Rep. Fortuno, Luis G.">Rep. Fortuno, Luis G.</option>
                                                    <option value="Rep. Fallin, Mary">Rep. Fallin, Mary</option>
                                                    <option value="Rep. Foster, Bill">Rep. Foster, Bill</option>
                                                    <option value="Rep. Fudge, Marcia L.">Rep. Fudge, Marcia L.</option>
                                                    <option value="Rep. Fleming, John">Rep. Fleming, John</option>
                                                    <option value="Sen. Franken, Al">Sen. Franken, Al</option>
                                                    <option value="Rep. Fincher, Stephen Lee">Rep. Fincher, Stephen Lee</option>
                                                    <option value="Rep. Fleischmann, Charles J. &quot;Chuck&quot;">Rep. Fleischmann, Charles J. "Chuck"</option>
                                                    <option value="Rep. Farenthold, Blake">Rep. Farenthold, Blake</option>
                                                    <option value="Rep. Flores, Bill">Rep. Flores, Bill</option>
                                                    <option value="Rep. Frankel, Lois">Rep. Frankel, Lois</option>
                                                    <option value="Sen. Fischer, Deb">Sen. Fischer, Deb</option>
                                                    <option value="Rep. Faso, John J.">Rep. Faso, John J.</option>
                                                    <option value="Rep. Ferguson, A. Drew, IV">Rep. Ferguson, A. Drew, IV</option>
                                                    <option value="Rep. Fitzpatrick, Brian K.">Rep. Fitzpatrick, Brian K.</option>
                                                    <option value="Rep. Gallegly, Elton">Rep. Gallegly, Elton</option>
                                                    <option value="Rep. Ganske, Greg">Rep. Ganske, Greg</option>
                                                    <option value="Rep. Gejdenson, Sam">Rep. Gejdenson, Sam</option>
                                                    <option value="Rep. Gekas, George W.">Rep. Gekas, George W.</option>
                                                    <option value="Rep. Gephardt, Richard A.">Rep. Gephardt, Richard A.</option>
                                                    <option value="Rep. Gibbons, Jim">Rep. Gibbons, Jim</option>
                                                    <option value="Rep. Gilchrest, Wayne T.">Rep. Gilchrest, Wayne T.</option>
                                                    <option value="Rep. Gillmor, Paul E.">Rep. Gillmor, Paul E.</option>
                                                    <option value="Rep. Gilman, Benjamin A.">Rep. Gilman, Benjamin A.</option>
                                                    <option value="Rep. Gingrich, Newt">Rep. Gingrich, Newt</option>
                                                    <option value="Sen. Glenn, John H., Jr.">Sen. Glenn, John H., Jr.</option>
                                                    <option value="Rep. Gonzalez, Henry B.">Rep. Gonzalez, Henry B.</option>
                                                    <option value="Rep. Goode, Virgil H., Jr.">Rep. Goode, Virgil H., Jr.</option>
                                                    <option value="Rep. Goodlatte, Bob">Rep. Goodlatte, Bob</option>
                                                    <option value="Rep. Goodling, William F.">Rep. Goodling, William F.</option>
                                                    <option value="Rep. Gordon, Bart">Rep. Gordon, Bart</option>
                                                    <option value="Sen. Gorton, Slade">Sen. Gorton, Slade</option>
                                                    <option value="Rep. Goss, Porter J.">Rep. Goss, Porter J.</option>
                                                    <option value="Sen. Graham, Bob">Sen. Graham, Bob</option>
                                                    <option value="Sen. Graham, Lindsey">Sen. Graham, Lindsey</option>
                                                    <option value="Sen. Gramm, Phil">Sen. Gramm, Phil</option>
                                                    <option value="Sen. Grams, Rod">Sen. Grams, Rod</option>
                                                    <option value="Rep. Granger, Kay">Rep. Granger, Kay</option>
                                                    <option value="Sen. Grassley, Chuck">Sen. Grassley, Chuck</option>
                                                    <option value="Rep. Green, Gene">Rep. Green, Gene</option>
                                                    <option value="Rep. Greenwood, James C.">Rep. Greenwood, James C.</option>
                                                    <option value="Sen. Gregg, Judd">Sen. Gregg, Judd</option>
                                                    <option value="Rep. Gutierrez, Luis V.">Rep. Gutierrez, Luis V.</option>
                                                    <option value="Rep. Gutknecht, Gil">Rep. Gutknecht, Gil</option>
                                                    <option value="Rep. Gonzalez, Charles A.">Rep. Gonzalez, Charles A.</option>
                                                    <option value="Rep. Green, Mark">Rep. Green, Mark</option>
                                                    <option value="Rep. Graves, Sam">Rep. Graves, Sam</option>
                                                    <option value="Rep. Grucci, Felix J., Jr.">Rep. Grucci, Felix J., Jr.</option>
                                                    <option value="Rep. Garrett, Scott">Rep. Garrett, Scott</option>
                                                    <option value="Rep. Gerlach, Jim">Rep. Gerlach, Jim</option>
                                                    <option value="Rep. Gingrey, Phil">Rep. Gingrey, Phil</option>
                                                    <option value="Rep. Grijalva, Raul M.">Rep. Grijalva, Raul M.</option>
                                                    <option value="Rep. Gohmert, Louie">Rep. Gohmert, Louie</option>
                                                    <option value="Rep. Green, Al">Rep. Green, Al</option>
                                                    <option value="Rep. Giffords, Gabrielle">Rep. Giffords, Gabrielle</option>
                                                    <option value="Sen. Gillibrand, Kirsten E.">Sen. Gillibrand, Kirsten E.</option>
                                                    <option value="Rep. Grayson, Alan">Rep. Grayson, Alan</option>
                                                    <option value="Rep. Griffith, Parker">Rep. Griffith, Parker</option>
                                                    <option value="Rep. Guthrie, Brett">Rep. Guthrie, Brett</option>
                                                    <option value="Rep. Garamendi, John">Rep. Garamendi, John</option>
                                                    <option value="Rep. Graves, Tom">Rep. Graves, Tom</option>
                                                    <option value="Sen. Goodwin, Carte Patrick">Sen. Goodwin, Carte Patrick</option>
                                                    <option value="Sen. Gardner, Cory">Sen. Gardner, Cory</option>
                                                    <option value="Rep. Gibbs, Bob">Rep. Gibbs, Bob</option>
                                                    <option value="Rep. Gibson, Christopher P.">Rep. Gibson, Christopher P.</option>
                                                    <option value="Rep. Gosar, Paul A.">Rep. Gosar, Paul A.</option>
                                                    <option value="Rep. Gowdy, Trey">Rep. Gowdy, Trey</option>
                                                    <option value="Rep. Griffin, Tim">Rep. Griffin, Tim</option>
                                                    <option value="Rep. Griffith, H. Morgan">Rep. Griffith, H. Morgan</option>
                                                    <option value="Rep. Grimm, Michael G.">Rep. Grimm, Michael G.</option>
                                                    <option value="Rep. Guinta, Frank C.">Rep. Guinta, Frank C.</option>
                                                    <option value="Rep. Gabbard, Tulsi">Rep. Gabbard, Tulsi</option>
                                                    <option value="Rep. Gallego, Pete P.">Rep. Gallego, Pete P.</option>
                                                    <option value="Rep. Garcia, Joe">Rep. Garcia, Joe</option>
                                                    <option value="Rep. Gallego, Ruben">Rep. Gallego, Ruben</option>
                                                    <option value="Rep. Graham, Gwen">Rep. Graham, Gwen</option>
                                                    <option value="Rep. Grothman, Glenn">Rep. Grothman, Glenn</option>
                                                    <option value="Rep. Graves, Garret">Rep. Graves, Garret</option>
                                                    <option value="Rep. Gaetz, Matt">Rep. Gaetz, Matt</option>
                                                    <option value="Rep. Gallagher, Mike">Rep. Gallagher, Mike</option>
                                                    <option value="Rep. Garrett, Thomas A., Jr.">Rep. Garrett, Thomas A., Jr.</option>
                                                    <option value="Rep. Gonzalez, Vicente">Rep. Gonzalez, Vicente</option>
                                                    <option value="Rep. Gonzalez-Colon, Jenniffer">Rep. Gonzalez-Colon, Jenniffer</option>
                                                    <option value="Rep. Gottheimer, Josh">Rep. Gottheimer, Josh</option>
                                                    <option value="Rep. Gianforte, Greg">Rep. Gianforte, Greg</option>
                                                    <option value="Rep. Gomez, Jimmy">Rep. Gomez, Jimmy</option>
                                                    <option value="Rep. Hall, Ralph M.">Rep. Hall, Ralph M.</option>
                                                    <option value="Rep. Hall, Tony P.">Rep. Hall, Tony P.</option>
                                                    <option value="Rep. Hamilton, Lee H.">Rep. Hamilton, Lee H.</option>
                                                    <option value="Rep. Hansen, James V.">Rep. Hansen, James V.</option>
                                                    <option value="Sen. Harkin, Tom">Sen. Harkin, Tom</option>
                                                    <option value="Rep. Harman, Jane">Rep. Harman, Jane</option>
                                                    <option value="Rep. Hastert, J. Dennis">Rep. Hastert, J. Dennis</option>
                                                    <option value="Rep. Hastings, Alcee L.">Rep. Hastings, Alcee L.</option>
                                                    <option value="Rep. Hastings, Doc">Rep. Hastings, Doc</option>
                                                    <option value="Sen. Hatch, Orrin G.">Sen. Hatch, Orrin G.</option>
                                                    <option value="Rep. Hayworth, J. D.">Rep. Hayworth, J. D.</option>
                                                    <option value="Rep. Hefley, Joel">Rep. Hefley, Joel</option>
                                                    <option value="Rep. Hefner, W. G. (Bill)">Rep. Hefner, W. G. (Bill)</option>
                                                    <option value="Sen. Helms, Jesse">Sen. Helms, Jesse</option>
                                                    <option value="Rep. Herger, Wally">Rep. Herger, Wally</option>
                                                    <option value="Rep. Hill, Rick">Rep. Hill, Rick</option>
                                                    <option value="Rep. Hilleary, Van">Rep. Hilleary, Van</option>
                                                    <option value="Rep. Hilliard, Earl F.">Rep. Hilliard, Earl F.</option>
                                                    <option value="Rep. Hinchey, Maurice D.">Rep. Hinchey, Maurice D.</option>
                                                    <option value="Rep. Hinojosa, Ruben">Rep. Hinojosa, Ruben</option>
                                                    <option value="Rep. Hobson, David L.">Rep. Hobson, David L.</option>
                                                    <option value="Rep. Hoekstra, Peter">Rep. Hoekstra, Peter</option>
                                                    <option value="Rep. Holden, Tim">Rep. Holden, Tim</option>
                                                    <option value="Sen. Hollings, Ernest F.">Sen. Hollings, Ernest F.</option>
                                                    <option value="Rep. Hooley, Darlene">Rep. Hooley, Darlene</option>
                                                    <option value="Rep. Horn, Stephen">Rep. Horn, Stephen</option>
                                                    <option value="Rep. Hostettler, John N.">Rep. Hostettler, John N.</option>
                                                    <option value="Rep. Houghton, Amo">Rep. Houghton, Amo</option>
                                                    <option value="Rep. Hoyer, Steny H.">Rep. Hoyer, Steny H.</option>
                                                    <option value="Rep. Hulshof, Kenny C.">Rep. Hulshof, Kenny C.</option>
                                                    <option value="Rep. Hunter, Duncan">Rep. Hunter, Duncan</option>
                                                    <option value="Rep. Hutchinson, Asa">Rep. Hutchinson, Asa</option>
                                                    <option value="Sen. Hutchinson, Tim">Sen. Hutchinson, Tim</option>
                                                    <option value="Sen. Hutchison, Kay Bailey">Sen. Hutchison, Kay Bailey</option>
                                                    <option value="Rep. Hyde, Henry J.">Rep. Hyde, Henry J.</option>
                                                    <option value="Sen. Hagel, Chuck">Sen. Hagel, Chuck</option>
                                                    <option value="Rep. Hayes, Robin">Rep. Hayes, Robin</option>
                                                    <option value="Rep. Hill, Baron P.">Rep. Hill, Baron P.</option>
                                                    <option value="Rep. Hoeffel, Joseph M.">Rep. Hoeffel, Joseph M.</option>
                                                    <option value="Rep. Holt, Rush">Rep. Holt, Rush</option>
                                                    <option value="Rep. Hart, Melissa A.">Rep. Hart, Melissa A.</option>
                                                    <option value="Rep. Honda, Michael M.">Rep. Honda, Michael M.</option>
                                                    <option value="Rep. Harris, Katherine">Rep. Harris, Katherine</option>
                                                    <option value="Rep. Hensarling, Jeb">Rep. Hensarling, Jeb</option>
                                                    <option value="Rep. Herseth Sandlin, Stephanie">Rep. Herseth Sandlin, Stephanie</option>
                                                    <option value="Rep. Higgins, Brian">Rep. Higgins, Brian</option>
                                                    <option value="Rep. Hall, John J.">Rep. Hall, John J.</option>
                                                    <option value="Rep. Hare, Phil">Rep. Hare, Phil</option>
                                                    <option value="Sen. Heller, Dean">Sen. Heller, Dean</option>
                                                    <option value="Sen. Hirono, Mazie K.">Sen. Hirono, Mazie K.</option>
                                                    <option value="Rep. Hodes, Paul W.">Rep. Hodes, Paul W.</option>
                                                    <option value="Rep. Halvorson, Deborah L.">Rep. Halvorson, Deborah L.</option>
                                                    <option value="Rep. Harper, Gregg">Rep. Harper, Gregg</option>
                                                    <option value="Sen. Heinrich, Martin">Sen. Heinrich, Martin</option>
                                                    <option value="Rep. Himes, James A.">Rep. Himes, James A.</option>
                                                    <option value="Rep. Hunter, Duncan D.">Rep. Hunter, Duncan D.</option>
                                                    <option value="Sen. Hagan, Kay">Sen. Hagan, Kay</option>
                                                    <option value="Rep. Hanabusa, Colleen">Rep. Hanabusa, Colleen</option>
                                                    <option value="Rep. Hanna, Richard L.">Rep. Hanna, Richard L.</option>
                                                    <option value="Rep. Harris, Andy">Rep. Harris, Andy</option>
                                                    <option value="Rep. Hartzler, Vicky">Rep. Hartzler, Vicky</option>
                                                    <option value="Rep. Hayworth, Nan A. S.">Rep. Hayworth, Nan A. S.</option>
                                                    <option value="Rep. Heck, Joseph J.">Rep. Heck, Joseph J.</option>
                                                    <option value="Rep. Herrera Beutler, Jaime">Rep. Herrera Beutler, Jaime</option>
                                                    <option value="Rep. Huelskamp, Tim">Rep. Huelskamp, Tim</option>
                                                    <option value="Rep. Huizenga, Bill">Rep. Huizenga, Bill</option>
                                                    <option value="Rep. Hultgren, Randy">Rep. Hultgren, Randy</option>
                                                    <option value="Rep. Hurt, Robert">Rep. Hurt, Robert</option>
                                                    <option value="Sen. Hoeven, John">Sen. Hoeven, John</option>
                                                    <option value="Rep. Hochul, Kathleen C.">Rep. Hochul, Kathleen C.</option>
                                                    <option value="Rep. Hahn, Janice">Rep. Hahn, Janice</option>
                                                    <option value="Rep. Heck, Denny">Rep. Heck, Denny</option>
                                                    <option value="Rep. Holding, George">Rep. Holding, George</option>
                                                    <option value="Rep. Horsford, Steven A.">Rep. Horsford, Steven A.</option>
                                                    <option value="Rep. Hudson, Richard">Rep. Hudson, Richard</option>
                                                    <option value="Rep. Huffman, Jared">Rep. Huffman, Jared</option>
                                                    <option value="Sen. Heitkamp, Heidi">Sen. Heitkamp, Heidi</option>
                                                    <option value="Rep. Hardy, Cresent">Rep. Hardy, Cresent</option>
                                                    <option value="Rep. Hice, Jody B.">Rep. Hice, Jody B.</option>
                                                    <option value="Rep. Hill, J. French">Rep. Hill, J. French</option>
                                                    <option value="Rep. Hurd, Will">Rep. Hurd, Will</option>
                                                    <option value="Rep. Hollingsworth, Trey">Rep. Hollingsworth, Trey</option>
                                                    <option value="Sen. Harris, Kamala D.">Sen. Harris, Kamala D.</option>
                                                    <option value="Sen. Hassan, Margaret Wood">Sen. Hassan, Margaret Wood</option>
                                                    <option value="Rep. Higgins, Clay">Rep. Higgins, Clay</option>
                                                    <option value="Rep. Handel, Karen C.">Rep. Handel, Karen C.</option>
                                                    <option value="Rep. Inglis, Bob">Rep. Inglis, Bob</option>
                                                    <option value="Sen. Inhofe, James M.">Sen. Inhofe, James M.</option>
                                                    <option value="Sen. Inouye, Daniel K.">Sen. Inouye, Daniel K.</option>
                                                    <option value="Rep. Inslee, Jay">Rep. Inslee, Jay</option>
                                                    <option value="Rep. Istook, Ernest J., Jr.">Rep. Istook, Ernest J., Jr.</option>
                                                    <option value="Sen. Isakson, Johnny">Sen. Isakson, Johnny</option>
                                                    <option value="Rep. Issa, Darrell E.">Rep. Issa, Darrell E.</option>
                                                    <option value="Rep. Israel, Steve">Rep. Israel, Steve</option>
                                                    <option value="Rep. Jackson Lee, Sheila">Rep. Jackson Lee, Sheila</option>
                                                    <option value="Rep. Jefferson, William J.">Rep. Jefferson, William J.</option>
                                                    <option value="Sen. Jeffords, James M.">Sen. Jeffords, James M.</option>
                                                    <option value="Rep. Jenkins, William L.">Rep. Jenkins, William L.</option>
                                                    <option value="Rep. John, Christopher">Rep. John, Christopher</option>
                                                    <option value="Rep. Johnson, Eddie Bernice">Rep. Johnson, Eddie Bernice</option>
                                                    <option value="Rep. Johnson, Jay W.">Rep. Johnson, Jay W.</option>
                                                    <option value="Rep. Johnson, Nancy L.">Rep. Johnson, Nancy L.</option>
                                                    <option value="Rep. Johnson, Sam">Rep. Johnson, Sam</option>
                                                    <option value="Sen. Johnson, Tim">Sen. Johnson, Tim</option>
                                                    <option value="Rep. Jones, Walter B., Jr.">Rep. Jones, Walter B., Jr.</option>
                                                    <option value="Rep. Jackson, Jesse L., Jr.">Rep. Jackson, Jesse L., Jr.</option>
                                                    <option value="Rep. Jones, Stephanie Tubbs">Rep. Jones, Stephanie Tubbs</option>
                                                    <option value="Rep. Johnson, Timothy V.">Rep. Johnson, Timothy V.</option>
                                                    <option value="Rep. Janklow, William J.">Rep. Janklow, William J.</option>
                                                    <option value="Rep. Jindal, Bobby">Rep. Jindal, Bobby</option>
                                                    <option value="Rep. Johnson, Henry C. &quot;Hank,&quot; Jr.">Rep. Johnson, Henry C. "Hank," Jr.</option>
                                                    <option value="Rep. Jordan, Jim">Rep. Jordan, Jim</option>
                                                    <option value="Rep. Jenkins, Lynn">Rep. Jenkins, Lynn</option>
                                                    <option value="Sen. Johanns, Mike">Sen. Johanns, Mike</option>
                                                    <option value="Rep. Johnson, Bill">Rep. Johnson, Bill</option>
                                                    <option value="Sen. Johnson, Ron">Sen. Johnson, Ron</option>
                                                    <option value="Rep. Jeffries, Hakeem S.">Rep. Jeffries, Hakeem S.</option>
                                                    <option value="Rep. Joyce, David P.">Rep. Joyce, David P.</option>
                                                    <option value="Rep. Jolly, David">Rep. Jolly, David</option>
                                                    <option value="Rep. Jenkins, Evan H.">Rep. Jenkins, Evan H.</option>
                                                    <option value="Rep. Jayapal, Pramila">Rep. Jayapal, Pramila</option>
                                                    <option value="Rep. Johnson, Mike">Rep. Johnson, Mike</option>
                                                    <option value="Rep. Kanjorski, Paul E.">Rep. Kanjorski, Paul E.</option>
                                                    <option value="Rep. Kaptur, Marcy">Rep. Kaptur, Marcy</option>
                                                    <option value="Rep. Kasich, John R.">Rep. Kasich, John R.</option>
                                                    <option value="Rep. Kelly, Sue W.">Rep. Kelly, Sue W.</option>
                                                    <option value="Sen. Kempthorne, Dirk">Sen. Kempthorne, Dirk</option>
                                                    <option value="Sen. Kennedy, Edward M.">Sen. Kennedy, Edward M.</option>
                                                    <option value="Rep. Kennedy, Joseph P., II">Rep. Kennedy, Joseph P., II</option>
                                                    <option value="Rep. Kennedy, Patrick J.">Rep. Kennedy, Patrick J.</option>
                                                    <option value="Rep. Kennelly, Barbara B.">Rep. Kennelly, Barbara B.</option>
                                                    <option value="Sen. Kerrey, J. Robert">Sen. Kerrey, J. Robert</option>
                                                    <option value="Sen. Kerry, John F.">Sen. Kerry, John F.</option>
                                                    <option value="Rep. Kildee, Dale E.">Rep. Kildee, Dale E.</option>
                                                    <option value="Rep. Kilpatrick, Carolyn C.">Rep. Kilpatrick, Carolyn C.</option>
                                                    <option value="Rep. Kim, Jay">Rep. Kim, Jay</option>
                                                    <option value="Rep. Kind, Ron">Rep. Kind, Ron</option>
                                                    <option value="Rep. King, Peter T.">Rep. King, Peter T.</option>
                                                    <option value="Rep. Kingston, Jack">Rep. Kingston, Jack</option>
                                                    <option value="Rep. Kleczka, Gerald D.">Rep. Kleczka, Gerald D.</option>
                                                    <option value="Rep. Klink, Ron">Rep. Klink, Ron</option>
                                                    <option value="Rep. Klug, Scott L.">Rep. Klug, Scott L.</option>
                                                    <option value="Rep. Knollenberg, Joe">Rep. Knollenberg, Joe</option>
                                                    <option value="Sen. Kohl, Herb">Sen. Kohl, Herb</option>
                                                    <option value="Rep. Kolbe, Jim">Rep. Kolbe, Jim</option>
                                                    <option value="Rep. Kucinich, Dennis J.">Rep. Kucinich, Dennis J.</option>
                                                    <option value="Sen. Kyl, Jon">Sen. Kyl, Jon</option>
                                                    <option value="Rep. Kuykendall, Steven T.">Rep. Kuykendall, Steven T.</option>
                                                    <option value="Rep. Kennedy, Mark R.">Rep. Kennedy, Mark R.</option>
                                                    <option value="Rep. Kerns, Brian D.">Rep. Kerns, Brian D.</option>
                                                    <option value="Sen. Kirk, Mark Steven">Sen. Kirk, Mark Steven</option>
                                                    <option value="Rep. Keller, Ric">Rep. Keller, Ric</option>
                                                    <option value="Rep. King, Steve">Rep. King, Steve</option>
                                                    <option value="Rep. Kline, John">Rep. Kline, John</option>
                                                    <option value="Rep. Kuhl, John R. &quot;Randy&quot;, Jr.">Rep. Kuhl, John R. "Randy", Jr.</option>
                                                    <option value="Rep. Kagen, Steve">Rep. Kagen, Steve</option>
                                                    <option value="Rep. Klein, Ron">Rep. Klein, Ron</option>
                                                    <option value="Sen. Klobuchar, Amy">Sen. Klobuchar, Amy</option>
                                                    <option value="Rep. Kirkpatrick, Ann">Rep. Kirkpatrick, Ann</option>
                                                    <option value="Rep. Kissell, Larry">Rep. Kissell, Larry</option>
                                                    <option value="Rep. Kosmas, Suzanne M.">Rep. Kosmas, Suzanne M.</option>
                                                    <option value="Rep. Kratovil, Frank, Jr.">Rep. Kratovil, Frank, Jr.</option>
                                                    <option value="Rep. Kilroy, Mary Jo">Rep. Kilroy, Mary Jo</option>
                                                    <option value="Sen. Kaufman, Edward E.">Sen. Kaufman, Edward E.</option>
                                                    <option value="Sen. Kirk, Paul Grattan, Jr.">Sen. Kirk, Paul Grattan, Jr.</option>
                                                    <option value="Rep. Keating, William R.">Rep. Keating, William R.</option>
                                                    <option value="Rep. Kelly, Mike">Rep. Kelly, Mike</option>
                                                    <option value="Rep. Kinzinger, Adam">Rep. Kinzinger, Adam</option>
                                                    <option value="Rep. Kennedy, Joseph P., III">Rep. Kennedy, Joseph P., III</option>
                                                    <option value="Rep. Kildee, Daniel T.">Rep. Kildee, Daniel T.</option>
                                                    <option value="Rep. Kilmer, Derek">Rep. Kilmer, Derek</option>
                                                    <option value="Rep. Kuster, Ann M.">Rep. Kuster, Ann M.</option>
                                                    <option value="Sen. King, Angus S., Jr.">Sen. King, Angus S., Jr.</option>
                                                    <option value="Sen. Kaine, Tim">Sen. Kaine, Tim</option>
                                                    <option value="Rep. Kelly, Robin L.">Rep. Kelly, Robin L.</option>
                                                    <option value="Rep. Katko, John">Rep. Katko, John</option>
                                                    <option value="Rep. Knight, Stephen">Rep. Knight, Stephen</option>
                                                    <option value="Rep. Kelly, Trent">Rep. Kelly, Trent</option>
                                                    <option value="Rep. Khanna, Ro">Rep. Khanna, Ro</option>
                                                    <option value="Rep. Kihuen, Ruben J.">Rep. Kihuen, Ruben J.</option>
                                                    <option value="Rep. Krishnamoorthi, Raja">Rep. Krishnamoorthi, Raja</option>
                                                    <option value="Rep. Kustoff, David">Rep. Kustoff, David</option>
                                                    <option value="Sen. Kennedy, John">Sen. Kennedy, John</option>
                                                    <option value="Sen. Lambert, Blanche M.">Sen. Lambert, Blanche M.</option>
                                                    <option value="Rep. Lampson, Nick">Rep. Lampson, Nick</option>
                                                    <option value="Rep. Lantos, Tom">Rep. Lantos, Tom</option>
                                                    <option value="Rep. Largent, Steve">Rep. Largent, Steve</option>
                                                    <option value="Rep. Latham, Tom">Rep. Latham, Tom</option>
                                                    <option value="Sen. Lautenberg, Frank R.">Sen. Lautenberg, Frank R.</option>
                                                    <option value="Rep. Lazio, Rick">Rep. Lazio, Rick</option>
                                                    <option value="Rep. Leach, James A.">Rep. Leach, James A.</option>
                                                    <option value="Sen. Leahy, Patrick J.">Sen. Leahy, Patrick J.</option>
                                                    <option value="Sen. Levin, Carl">Sen. Levin, Carl</option>
                                                    <option value="Rep. Levin, Sander M.">Rep. Levin, Sander M.</option>
                                                    <option value="Rep. Lewis, Jerry">Rep. Lewis, Jerry</option>
                                                    <option value="Rep. Lewis, John">Rep. Lewis, John</option>
                                                    <option value="Rep. Lewis, Ron">Rep. Lewis, Ron</option>
                                                    <option value="Sen. Lieberman, Joseph I.">Sen. Lieberman, Joseph I.</option>
                                                    <option value="Rep. Linder, John">Rep. Linder, John</option>
                                                    <option value="Rep. Lipinski, William O.">Rep. Lipinski, William O.</option>
                                                    <option value="Rep. Livingston, Bob">Rep. Livingston, Bob</option>
                                                    <option value="Rep. Lofgren, Zoe">Rep. Lofgren, Zoe</option>
                                                    <option value="Sen. Lott, Trent">Sen. Lott, Trent</option>
                                                    <option value="Rep. Lowey, Nita M.">Rep. Lowey, Nita M.</option>
                                                    <option value="Rep. Lucas, Frank D.">Rep. Lucas, Frank D.</option>
                                                    <option value="Sen. Lugar, Richard G.">Sen. Lugar, Richard G.</option>
                                                    <option value="Rep. Lungren, Daniel E.">Rep. Lungren, Daniel E.</option>
                                                    <option value="Rep. Luther, Bill">Rep. Luther, Bill</option>
                                                    <option value="Sen. Landrieu, Mary L.">Sen. Landrieu, Mary L.</option>
                                                    <option value="Rep. Lee, Barbara">Rep. Lee, Barbara</option>
                                                    <option value="Rep. LaHood, Ray">Rep. LaHood, Ray</option>
                                                    <option value="Rep. LaTourette, Steven C.">Rep. LaTourette, Steven C.</option>
                                                    <option value="Rep. LoBiondo, Frank A.">Rep. LoBiondo, Frank A.</option>
                                                    <option value="Rep. LaFalce, John J.">Rep. LaFalce, John J.</option>
                                                    <option value="Rep. Larson, John B.">Rep. Larson, John B.</option>
                                                    <option value="Rep. Lucas, Ken">Rep. Lucas, Ken</option>
                                                    <option value="Rep. Langevin, James R.">Rep. Langevin, James R.</option>
                                                    <option value="Rep. Larsen, Rick">Rep. Larsen, Rick</option>
                                                    <option value="Rep. Lynch, Stephen F.">Rep. Lynch, Stephen F.</option>
                                                    <option value="Rep. Lipinski, Daniel">Rep. Lipinski, Daniel</option>
                                                    <option value="Rep. Lamborn, Doug">Rep. Lamborn, Doug</option>
                                                    <option value="Rep. Loebsack, David">Rep. Loebsack, David</option>
                                                    <option value="Rep. Latta, Robert E.">Rep. Latta, Robert E.</option>
                                                    <option value="Rep. Lance, Leonard">Rep. Lance, Leonard</option>
                                                    <option value="Rep. Lee, Christopher J.">Rep. Lee, Christopher J.</option>
                                                    <option value="Rep. Luetkemeyer, Blaine">Rep. Luetkemeyer, Blaine</option>
                                                    <option value="Rep. Lujan, Ben Ray">Rep. Lujan, Ben Ray</option>
                                                    <option value="Rep. Lummis, Cynthia M.">Rep. Lummis, Cynthia M.</option>
                                                    <option value="Sen. LeMieux, George S.">Sen. LeMieux, George S.</option>
                                                    <option value="Rep. Labrador, Raul R.">Rep. Labrador, Raul R.</option>
                                                    <option value="Rep. Landry, Jeffrey M.">Rep. Landry, Jeffrey M.</option>
                                                    <option value="Sen. Lankford, James">Sen. Lankford, James</option>
                                                    <option value="Rep. Long, Billy">Rep. Long, Billy</option>
                                                    <option value="Sen. Lee, Mike">Sen. Lee, Mike</option>
                                                    <option value="Rep. LaMalfa, Doug">Rep. LaMalfa, Doug</option>
                                                    <option value="Rep. Lowenthal, Alan S.">Rep. Lowenthal, Alan S.</option>
                                                    <option value="Rep. Lujan Grisham, Michelle">Rep. Lujan Grisham, Michelle</option>
                                                    <option value="Rep. Lawrence, Brenda L.">Rep. Lawrence, Brenda L.</option>
                                                    <option value="Rep. Lieu, Ted">Rep. Lieu, Ted</option>
                                                    <option value="Rep. Loudermilk, Barry">Rep. Loudermilk, Barry</option>
                                                    <option value="Rep. Love, Mia B.">Rep. Love, Mia B.</option>
                                                    <option value="Rep. LaHood, Darin">Rep. LaHood, Darin</option>
                                                    <option value="Rep. Lawson, Al, Jr.">Rep. Lawson, Al, Jr.</option>
                                                    <option value="Rep. Lewis, Jason">Rep. Lewis, Jason</option>
                                                    <option value="Sen. Mack, Connie, III">Sen. Mack, Connie, III</option>
                                                    <option value="Rep. Maloney, Carolyn B.">Rep. Maloney, Carolyn B.</option>
                                                    <option value="Rep. Maloney, James H.">Rep. Maloney, James H.</option>
                                                    <option value="Rep. Manton, Thomas J.">Rep. Manton, Thomas J.</option>
                                                    <option value="Sen. Markey, Edward J.">Sen. Markey, Edward J.</option>
                                                    <option value="Rep. Martinez, Matthew G.">Rep. Martinez, Matthew G.</option>
                                                    <option value="Rep. Mascara, Frank">Rep. Mascara, Frank</option>
                                                    <option value="Rep. Matsui, Robert T.">Rep. Matsui, Robert T.</option>
                                                    <option value="Sen. McCain, John">Sen. McCain, John</option>
                                                    <option value="Rep. McCarthy, Carolyn">Rep. McCarthy, Carolyn</option>
                                                    <option value="Rep. McGovern, James P.">Rep. McGovern, James P.</option>
                                                    <option value="Rep. McCarthy, Karen">Rep. McCarthy, Karen</option>
                                                    <option value="Rep. McCollum, Bill">Rep. McCollum, Bill</option>
                                                    <option value="Sen. McConnell, Mitch">Sen. McConnell, Mitch</option>
                                                    <option value="Rep. McCrery, Jim">Rep. McCrery, Jim</option>
                                                    <option value="Rep. McDade, Joseph M.">Rep. McDade, Joseph M.</option>
                                                    <option value="Rep. McDermott, Jim">Rep. McDermott, Jim</option>
                                                    <option value="Rep. McHale, Paul">Rep. McHale, Paul</option>
                                                    <option value="Rep. McHugh, John M.">Rep. McHugh, John M.</option>
                                                    <option value="Rep. McInnis, Scott">Rep. McInnis, Scott</option>
                                                    <option value="Rep. McIntosh, David M.">Rep. McIntosh, David M.</option>
                                                    <option value="Rep. McIntyre, Mike">Rep. McIntyre, Mike</option>
                                                    <option value="Rep. McKeon, Howard P. &quot;Buck&quot;">Rep. McKeon, Howard P. "Buck"</option>
                                                    <option value="Rep. McKinney, Cynthia A.">Rep. McKinney, Cynthia A.</option>
                                                    <option value="Rep. McNulty, Michael R.">Rep. McNulty, Michael R.</option>
                                                    <option value="Rep. Meehan, Martin T.">Rep. Meehan, Martin T.</option>
                                                    <option value="Rep. Meek, Carrie P.">Rep. Meek, Carrie P.</option>
                                                    <option value="Sen. Menendez, Robert">Sen. Menendez, Robert</option>
                                                    <option value="Rep. Metcalf, Jack">Rep. Metcalf, Jack</option>
                                                    <option value="Rep. Mica, John L.">Rep. Mica, John L.</option>
                                                    <option value="Sen. Mikulski, Barbara A.">Sen. Mikulski, Barbara A.</option>
                                                    <option value="Rep. Millender-McDonald, Juanita">Rep. Millender-McDonald, Juanita</option>
                                                    <option value="Rep. Miller, Dan">Rep. Miller, Dan</option>
                                                    <option value="Rep. Miller, George">Rep. Miller, George</option>
                                                    <option value="Rep. Minge, David">Rep. Minge, David</option>
                                                    <option value="Rep. Mink, Patsy T.">Rep. Mink, Patsy T.</option>
                                                    <option value="Rep. Moakley, John Joseph">Rep. Moakley, John Joseph</option>
                                                    <option value="Rep. Molinari, Susan">Rep. Molinari, Susan</option>
                                                    <option value="Rep. Mollohan, Alan B.">Rep. Mollohan, Alan B.</option>
                                                    <option value="Rep. Moran, James P.">Rep. Moran, James P.</option>
                                                    <option value="Sen. Moran, Jerry">Sen. Moran, Jerry</option>
                                                    <option value="Rep. Morella, Constance A.">Rep. Morella, Constance A.</option>
                                                    <option value="Sen. Moseley-Braun, Carol">Sen. Moseley-Braun, Carol</option>
                                                    <option value="Sen. Moynihan, Daniel Patrick">Sen. Moynihan, Daniel Patrick</option>
                                                    <option value="Sen. Murkowski, Frank H.">Sen. Murkowski, Frank H.</option>
                                                    <option value="Sen. Murray, Patty">Sen. Murray, Patty</option>
                                                    <option value="Rep. Murtha, John P.">Rep. Murtha, John P.</option>
                                                    <option value="Rep. Myrick, Sue Wilkins">Rep. Myrick, Sue Wilkins</option>
                                                    <option value="Rep. Meeks, Gregory W.">Rep. Meeks, Gregory W.</option>
                                                    <option value="Rep. Manzullo, Donald A.">Rep. Manzullo, Donald A.</option>
                                                    <option value="Rep. Miller, Gary G.">Rep. Miller, Gary G.</option>
                                                    <option value="Rep. Moore, Dennis">Rep. Moore, Dennis</option>
                                                    <option value="Sen. Miller, Zell">Sen. Miller, Zell</option>
                                                    <option value="Rep. Matheson, Jim">Rep. Matheson, Jim</option>
                                                    <option value="Rep. McCollum, Betty">Rep. McCollum, Betty</option>
                                                    <option value="Rep. Miller, Jeff">Rep. Miller, Jeff</option>
                                                    <option value="Rep. Majette, Denise L.">Rep. Majette, Denise L.</option>
                                                    <option value="Rep. Marshall, Jim">Rep. Marshall, Jim</option>
                                                    <option value="Rep. McCotter, Thaddeus G.">Rep. McCotter, Thaddeus G.</option>
                                                    <option value="Rep. Meek, Kendrick B.">Rep. Meek, Kendrick B.</option>
                                                    <option value="Rep. Michaud, Michael H.">Rep. Michaud, Michael H.</option>
                                                    <option value="Rep. Miller, Candice S.">Rep. Miller, Candice S.</option>
                                                    <option value="Rep. Murphy, Tim">Rep. Murphy, Tim</option>
                                                    <option value="Rep. Musgrave, Marilyn N.">Rep. Musgrave, Marilyn N.</option>
                                                    <option value="Sen. Murkowski, Lisa">Sen. Murkowski, Lisa</option>
                                                    <option value="Rep. Miller, Brad">Rep. Miller, Brad</option>
                                                    <option value="Rep. Mack, Connie">Rep. Mack, Connie</option>
                                                    <option value="Rep. McHenry, Patrick T.">Rep. McHenry, Patrick T.</option>
                                                    <option value="Rep. McCaul, Michael T.">Rep. McCaul, Michael T.</option>
                                                    <option value="Rep. Marchant, Kenny">Rep. Marchant, Kenny</option>
                                                    <option value="Rep. McMorris Rodgers, Cathy">Rep. McMorris Rodgers, Cathy</option>
                                                    <option value="Rep. Moore, Gwen">Rep. Moore, Gwen</option>
                                                    <option value="Rep. Melancon, Charlie">Rep. Melancon, Charlie</option>
                                                    <option value="Sen. Martinez, Mel">Sen. Martinez, Mel</option>
                                                    <option value="Rep. Matsui, Doris O.">Rep. Matsui, Doris O.</option>
                                                    <option value="Rep. Mahoney, Tim">Rep. Mahoney, Tim</option>
                                                    <option value="Rep. McCarthy, Kevin">Rep. McCarthy, Kevin</option>
                                                    <option value="Rep. McNerney, Jerry">Rep. McNerney, Jerry</option>
                                                    <option value="Rep. Mitchell, Harry E.">Rep. Mitchell, Harry E.</option>
                                                    <option value="Rep. Murphy, Patrick J.">Rep. Murphy, Patrick J.</option>
                                                    <option value="Sen. Murphy, Christopher">Sen. Murphy, Christopher</option>
                                                    <option value="Sen. McCaskill, Claire">Sen. McCaskill, Claire</option>
                                                    <option value="Rep. Maffei, Daniel B.">Rep. Maffei, Daniel B.</option>
                                                    <option value="Rep. Markey, Betsy">Rep. Markey, Betsy</option>
                                                    <option value="Rep. Massa, Eric J. J.">Rep. Massa, Eric J. J.</option>
                                                    <option value="Rep. McMahon, Michael E.">Rep. McMahon, Michael E.</option>
                                                    <option value="Rep. Minnick, Walter">Rep. Minnick, Walter</option>
                                                    <option value="Sen. Merkley, Jeff">Sen. Merkley, Jeff</option>
                                                    <option value="Rep. McClintock, Tom">Rep. McClintock, Tom</option>
                                                    <option value="Rep. Murphy, Scott">Rep. Murphy, Scott</option>
                                                    <option value="Rep. Marino, Tom">Rep. Marino, Tom</option>
                                                    <option value="Rep. McKinley, David B.">Rep. McKinley, David B.</option>
                                                    <option value="Rep. Meehan, Patrick">Rep. Meehan, Patrick</option>
                                                    <option value="Rep. Mulvaney, Mick">Rep. Mulvaney, Mick</option>
                                                    <option value="Sen. Manchin, Joe, III">Sen. Manchin, Joe, III</option>
                                                    <option value="Rep. Massie, Thomas">Rep. Massie, Thomas</option>
                                                    <option value="Rep. Maloney, Sean Patrick">Rep. Maloney, Sean Patrick</option>
                                                    <option value="Rep. Meadows, Mark">Rep. Meadows, Mark</option>
                                                    <option value="Rep. Meng, Grace">Rep. Meng, Grace</option>
                                                    <option value="Rep. Messer, Luke">Rep. Messer, Luke</option>
                                                    <option value="Rep. Mullin, Markwayne">Rep. Mullin, Markwayne</option>
                                                    <option value="Rep. Murphy, Patrick">Rep. Murphy, Patrick</option>
                                                    <option value="Rep. McAllister, Vance M.">Rep. McAllister, Vance M.</option>
                                                    <option value="Rep. MacArthur, Thomas">Rep. MacArthur, Thomas</option>
                                                    <option value="Rep. Moolenaar, John R.">Rep. Moolenaar, John R.</option>
                                                    <option value="Rep. Mooney, Alexander X.">Rep. Mooney, Alexander X.</option>
                                                    <option value="Rep. Moulton, Seth">Rep. Moulton, Seth</option>
                                                    <option value="Rep. McSally, Martha">Rep. McSally, Martha</option>
                                                    <option value="Rep. Marshall, Roger W.">Rep. Marshall, Roger W.</option>
                                                    <option value="Rep. Mast, Brian J.">Rep. Mast, Brian J.</option>
                                                    <option value="Rep. McEachin, A. Donald">Rep. McEachin, A. Donald</option>
                                                    <option value="Rep. Mitchell, Paul">Rep. Mitchell, Paul</option>
                                                    <option value="Rep. Murphy, Stephanie N.">Rep. Murphy, Stephanie N.</option>
                                                    <option value="Rep. Nadler, Jerrold">Rep. Nadler, Jerrold</option>
                                                    <option value="Rep. Neal, Richard E.">Rep. Neal, Richard E.</option>
                                                    <option value="Sen. Nelson, Bill">Sen. Nelson, Bill</option>
                                                    <option value="Rep. Nethercutt, George R., Jr.">Rep. Nethercutt, George R., Jr.</option>
                                                    <option value="Rep. Neumann, Mark W.">Rep. Neumann, Mark W.</option>
                                                    <option value="Rep. Ney, Robert W.">Rep. Ney, Robert W.</option>
                                                    <option value="Sen. Nickles, Don">Sen. Nickles, Don</option>
                                                    <option value="Rep. Nolan, Richard M.">Rep. Nolan, Richard M.</option>
                                                    <option value="Rep. Northup, Anne M.">Rep. Northup, Anne M.</option>
                                                    <option value="Rep. Norton, Eleanor Holmes">Rep. Norton, Eleanor Holmes</option>
                                                    <option value="Rep. Norwood, Charles W.">Rep. Norwood, Charles W.</option>
                                                    <option value="Rep. Nussle, Jim">Rep. Nussle, Jim</option>
                                                    <option value="Rep. Napolitano, Grace F.">Rep. Napolitano, Grace F.</option>
                                                    <option value="Sen. Nelson, Ben">Sen. Nelson, Ben</option>
                                                    <option value="Rep. Nunes, Devin">Rep. Nunes, Devin</option>
                                                    <option value="Rep. Neugebauer, Randy">Rep. Neugebauer, Randy</option>
                                                    <option value="Rep. Nye, Glenn C.">Rep. Nye, Glenn C.</option>
                                                    <option value="Rep. Noem, Kristi L.">Rep. Noem, Kristi L.</option>
                                                    <option value="Rep. Nugent, Richard B.">Rep. Nugent, Richard B.</option>
                                                    <option value="Rep. Nunnelee, Alan">Rep. Nunnelee, Alan</option>
                                                    <option value="Rep. Negrete McLeod, Gloria">Rep. Negrete McLeod, Gloria</option>
                                                    <option value="Rep. Norcross, Donald">Rep. Norcross, Donald</option>
                                                    <option value="Rep. Newhouse, Dan">Rep. Newhouse, Dan</option>
                                                    <option value="Rep. Norman, Ralph">Rep. Norman, Ralph</option>
                                                    <option value="Rep. Oberstar, James L.">Rep. Oberstar, James L.</option>
                                                    <option value="Rep. Obey, David R.">Rep. Obey, David R.</option>
                                                    <option value="Rep. Olver, John W.">Rep. Olver, John W.</option>
                                                    <option value="Rep. Ortiz, Solomon P.">Rep. Ortiz, Solomon P.</option>
                                                    <option value="Rep. Owens, Major R.">Rep. Owens, Major R.</option>
                                                    <option value="Rep. Oxley, Michael G.">Rep. Oxley, Michael G.</option>
                                                    <option value="Rep. Ose, Doug">Rep. Ose, Doug</option>
                                                    <option value="Rep. Osborne, Tom">Rep. Osborne, Tom</option>
                                                    <option value="Rep. Otter, C. L. (Butch)">Rep. Otter, C. L. (Butch)</option>
                                                    <option value="Sen. Obama, Barack">Sen. Obama, Barack</option>
                                                    <option value="Rep. Olson, Pete">Rep. Olson, Pete</option>
                                                    <option value="Rep. Owens, William L.">Rep. Owens, William L.</option>
                                                    <option value="Rep. O" rourke,="" beto'="">Rep. O'Rourke, Beto</option>
                                                    <option value="Rep. O" halleran,="" tom'="">Rep. O'Halleran, Tom</option>
                                                    <option value="Rep. Packard, Ron">Rep. Packard, Ron</option>
                                                    <option value="Rep. Pallone, Frank, Jr.">Rep. Pallone, Frank, Jr.</option>
                                                    <option value="Rep. Pappas, Michael">Rep. Pappas, Michael</option>
                                                    <option value="Rep. Parker, Mike">Rep. Parker, Mike</option>
                                                    <option value="Rep. Pascrell, Bill, Jr.">Rep. Pascrell, Bill, Jr.</option>
                                                    <option value="Rep. Pastor, Ed">Rep. Pastor, Ed</option>
                                                    <option value="Rep. Paxon, Bill">Rep. Paxon, Bill</option>
                                                    <option value="Rep. Payne, Donald M.">Rep. Payne, Donald M.</option>
                                                    <option value="Rep. Pease, Edward A.">Rep. Pease, Edward A.</option>
                                                    <option value="Rep. Pelosi, Nancy">Rep. Pelosi, Nancy</option>
                                                    <option value="Rep. Peterson, Collin C.">Rep. Peterson, Collin C.</option>
                                                    <option value="Rep. Peterson, John E.">Rep. Peterson, John E.</option>
                                                    <option value="Rep. Petri, Thomas E.">Rep. Petri, Thomas E.</option>
                                                    <option value="Rep. Pickering, Charles W. &quot;Chip&quot;">Rep. Pickering, Charles W. "Chip"</option>
                                                    <option value="Rep. Pickett, Owen B.">Rep. Pickett, Owen B.</option>
                                                    <option value="Rep. Pitts, Joseph R.">Rep. Pitts, Joseph R.</option>
                                                    <option value="Rep. Pombo, Richard W.">Rep. Pombo, Richard W.</option>
                                                    <option value="Rep. Pomeroy, Earl">Rep. Pomeroy, Earl</option>
                                                    <option value="Rep. Porter, John Edward">Rep. Porter, John Edward</option>
                                                    <option value="Sen. Portman, Rob">Sen. Portman, Rob</option>
                                                    <option value="Rep. Poshard, Glenn">Rep. Poshard, Glenn</option>
                                                    <option value="Rep. Price, David E.">Rep. Price, David E.</option>
                                                    <option value="Rep. Pryce, Deborah">Rep. Pryce, Deborah</option>
                                                    <option value="Rep. Paul, Ron">Rep. Paul, Ron</option>
                                                    <option value="Rep. Phelps, David D.">Rep. Phelps, David D.</option>
                                                    <option value="Rep. Platts, Todd Russell">Rep. Platts, Todd Russell</option>
                                                    <option value="Rep. Putnam, Adam H.">Rep. Putnam, Adam H.</option>
                                                    <option value="Rep. Pence, Mike">Rep. Pence, Mike</option>
                                                    <option value="Rep. Pearce, Stevan">Rep. Pearce, Stevan</option>
                                                    <option value="Rep. Porter, Jon C.">Rep. Porter, Jon C.</option>
                                                    <option value="Sen. Pryor, Mark L.">Sen. Pryor, Mark L.</option>
                                                    <option value="Rep. Price, Tom">Rep. Price, Tom</option>
                                                    <option value="Rep. Poe, Ted">Rep. Poe, Ted</option>
                                                    <option value="Rep. Perlmutter, Ed">Rep. Perlmutter, Ed</option>
                                                    <option value="Rep. Paulsen, Erik">Rep. Paulsen, Erik</option>
                                                    <option value="Sen. Peters, Gary C.">Sen. Peters, Gary C.</option>
                                                    <option value="Rep. Pierluisi, Pedro R.">Rep. Pierluisi, Pedro R.</option>
                                                    <option value="Rep. Pingree, Chellie">Rep. Pingree, Chellie</option>
                                                    <option value="Rep. Polis, Jared">Rep. Polis, Jared</option>
                                                    <option value="Rep. Posey, Bill">Rep. Posey, Bill</option>
                                                    <option value="Rep. Perriello, Thomas S.P.">Rep. Perriello, Thomas S.P.</option>
                                                    <option value="Rep. Palazzo, Steven M.">Rep. Palazzo, Steven M.</option>
                                                    <option value="Rep. Pompeo, Mike">Rep. Pompeo, Mike</option>
                                                    <option value="Sen. Paul, Rand">Sen. Paul, Rand</option>
                                                    <option value="Rep. Payne, Donald M., Jr.">Rep. Payne, Donald M., Jr.</option>
                                                    <option value="Rep. Perry, Scott">Rep. Perry, Scott</option>
                                                    <option value="Rep. Pittenger, Robert">Rep. Pittenger, Robert</option>
                                                    <option value="Rep. Pocan, Mark">Rep. Pocan, Mark</option>
                                                    <option value="Rep. Peters, Scott H.">Rep. Peters, Scott H.</option>
                                                    <option value="Rep. Palmer, Gary J.">Rep. Palmer, Gary J.</option>
                                                    <option value="Rep. Plaskett, Stacey E.">Rep. Plaskett, Stacey E.</option>
                                                    <option value="Rep. Poliquin, Bruce">Rep. Poliquin, Bruce</option>
                                                    <option value="Sen. Perdue, David">Sen. Perdue, David</option>
                                                    <option value="Rep. Panetta, Jimmy">Rep. Panetta, Jimmy</option>
                                                    <option value="Rep. Quinn, Jack">Rep. Quinn, Jack</option>
                                                    <option value="Rep. Quigley, Mike">Rep. Quigley, Mike</option>
                                                    <option value="Rep. Quayle, Benjamin">Rep. Quayle, Benjamin</option>
                                                    <option value="Rep. Radanovich, George">Rep. Radanovich, George</option>
                                                    <option value="Rep. Rahall, Nick J., II">Rep. Rahall, Nick J., II</option>
                                                    <option value="Rep. Ramstad, Jim">Rep. Ramstad, Jim</option>
                                                    <option value="Rep. Rangel, Charles B.">Rep. Rangel, Charles B.</option>
                                                    <option value="Sen. Reed, Jack">Sen. Reed, Jack</option>
                                                    <option value="Rep. Regula, Ralph">Rep. Regula, Ralph</option>
                                                    <option value="Sen. Reid, Harry">Sen. Reid, Harry</option>
                                                    <option value="Rep. Reyes, Silvestre">Rep. Reyes, Silvestre</option>
                                                    <option value="Rep. Richardson, Bill">Rep. Richardson, Bill</option>
                                                    <option value="Rep. Riggs, Frank">Rep. Riggs, Frank</option>
                                                    <option value="Rep. Riley, Bob">Rep. Riley, Bob</option>
                                                    <option value="Rep. Rivers, Lynn N.">Rep. Rivers, Lynn N.</option>
                                                    <option value="Sen. Robb, Charles S.">Sen. Robb, Charles S.</option>
                                                    <option value="Sen. Roberts, Pat">Sen. Roberts, Pat</option>
                                                    <option value="Sen. Rockefeller, John D., IV">Sen. Rockefeller, John D., IV</option>
                                                    <option value="Rep. Roemer, Tim">Rep. Roemer, Tim</option>
                                                    <option value="Rep. Rogan, James E.">Rep. Rogan, James E.</option>
                                                    <option value="Rep. Rogers, Harold">Rep. Rogers, Harold</option>
                                                    <option value="Rep. Rohrabacher, Dana">Rep. Rohrabacher, Dana</option>
                                                    <option value="Rep. Romero-Barcelo, Carlos A.">Rep. Romero-Barcelo, Carlos A.</option>
                                                    <option value="Rep. Ros-Lehtinen, Ileana">Rep. Ros-Lehtinen, Ileana</option>
                                                    <option value="Sen. Roth Jr., William V.">Sen. Roth Jr., William V.</option>
                                                    <option value="Rep. Rothman, Steven R.">Rep. Rothman, Steven R.</option>
                                                    <option value="Rep. Roukema, Marge">Rep. Roukema, Marge</option>
                                                    <option value="Rep. Roybal-Allard, Lucille">Rep. Roybal-Allard, Lucille</option>
                                                    <option value="Rep. Royce, Edward R.">Rep. Royce, Edward R.</option>
                                                    <option value="Rep. Rush, Bobby L.">Rep. Rush, Bobby L.</option>
                                                    <option value="Rep. Ryun, Jim">Rep. Ryun, Jim</option>
                                                    <option value="Rep. Redmond, Bill">Rep. Redmond, Bill</option>
                                                    <option value="Rep. Rodriguez, Ciro D.">Rep. Rodriguez, Ciro D.</option>
                                                    <option value="Rep. Reynolds, Thomas M.">Rep. Reynolds, Thomas M.</option>
                                                    <option value="Rep. Ryan, Paul">Rep. Ryan, Paul</option>
                                                    <option value="Rep. Rehberg, Denny">Rep. Rehberg, Denny</option>
                                                    <option value="Rep. Rogers, Michael J.">Rep. Rogers, Michael J.</option>
                                                    <option value="Rep. Ross, Mike">Rep. Ross, Mike</option>
                                                    <option value="Rep. Renzi, Rick">Rep. Renzi, Rick</option>
                                                    <option value="Rep. Rogers, Mike D.">Rep. Rogers, Mike D.</option>
                                                    <option value="Rep. Ruppersberger, C. A. Dutch">Rep. Ruppersberger, C. A. Dutch</option>
                                                    <option value="Rep. Ryan, Tim">Rep. Ryan, Tim</option>
                                                    <option value="Rep. Reichert, David G.">Rep. Reichert, David G.</option>
                                                    <option value="Rep. Roskam, Peter J.">Rep. Roskam, Peter J.</option>
                                                    <option value="Rep. Richardson, Laura">Rep. Richardson, Laura</option>
                                                    <option value="Rep. Roe, David P.">Rep. Roe, David P.</option>
                                                    <option value="Rep. Rooney, Thomas J.">Rep. Rooney, Thomas J.</option>
                                                    <option value="Sen. Risch, James E.">Sen. Risch, James E.</option>
                                                    <option value="Rep. Reed, Tom">Rep. Reed, Tom</option>
                                                    <option value="Rep. Renacci, James B.">Rep. Renacci, James B.</option>
                                                    <option value="Rep. Ribble, Reid J.">Rep. Ribble, Reid J.</option>
                                                    <option value="Rep. Richmond, Cedric L.">Rep. Richmond, Cedric L.</option>
                                                    <option value="Rep. Rigell, E. Scott">Rep. Rigell, E. Scott</option>
                                                    <option value="Rep. Rivera, David">Rep. Rivera, David</option>
                                                    <option value="Rep. Roby, Martha">Rep. Roby, Martha</option>
                                                    <option value="Rep. Rokita, Todd">Rep. Rokita, Todd</option>
                                                    <option value="Rep. Ross, Dennis A.">Rep. Ross, Dennis A.</option>
                                                    <option value="Rep. Runyan, Jon">Rep. Runyan, Jon</option>
                                                    <option value="Sen. Rubio, Marco">Sen. Rubio, Marco</option>
                                                    <option value="Rep. Radel, Trey">Rep. Radel, Trey</option>
                                                    <option value="Rep. Rice, Tom">Rep. Rice, Tom</option>
                                                    <option value="Rep. Rothfus, Keith J.">Rep. Rothfus, Keith J.</option>
                                                    <option value="Rep. Ruiz, Raul">Rep. Ruiz, Raul</option>
                                                    <option value="Rep. Radewagen, Aumua Amata Coleman">Rep. Radewagen, Aumua Amata Coleman</option>
                                                    <option value="Rep. Ratcliffe, John">Rep. Ratcliffe, John</option>
                                                    <option value="Rep. Rice, Kathleen M.">Rep. Rice, Kathleen M.</option>
                                                    <option value="Rep. Rouzer, David">Rep. Rouzer, David</option>
                                                    <option value="Rep. Russell, Steve">Rep. Russell, Steve</option>
                                                    <option value="Sen. Rounds, Mike">Sen. Rounds, Mike</option>
                                                    <option value="Rep. Raskin, Jamie">Rep. Raskin, Jamie</option>
                                                    <option value="Rep. Rooney, Francis">Rep. Rooney, Francis</option>
                                                    <option value="Rep. Rosen, Jacky">Rep. Rosen, Jacky</option>
                                                    <option value="Rep. Rutherford, John H.">Rep. Rutherford, John H.</option>
                                                    <option value="Rep. Sabo, Martin Olav">Rep. Sabo, Martin Olav</option>
                                                    <option value="Rep. Salmon, Matt">Rep. Salmon, Matt</option>
                                                    <option value="Rep. Sanchez, Loretta">Rep. Sanchez, Loretta</option>
                                                    <option value="Sen. Sanders, Bernard">Sen. Sanders, Bernard</option>
                                                    <option value="Rep. Sandlin, Max">Rep. Sandlin, Max</option>
                                                    <option value="Rep. Sanford, Mark">Rep. Sanford, Mark</option>
                                                    <option value="Sen. Santorum, Rick">Sen. Santorum, Rick</option>
                                                    <option value="Sen. Sarbanes, Paul S.">Sen. Sarbanes, Paul S.</option>
                                                    <option value="Rep. Sawyer, Tom">Rep. Sawyer, Tom</option>
                                                    <option value="Rep. Saxton, Jim">Rep. Saxton, Jim</option>
                                                    <option value="Rep. Scarborough, Joe">Rep. Scarborough, Joe</option>
                                                    <option value="Rep. Schaefer, Dan">Rep. Schaefer, Dan</option>
                                                    <option value="Rep. Schaffer, Bob">Rep. Schaffer, Bob</option>
                                                    <option value="Rep. Schiff, Steven">Rep. Schiff, Steven</option>
                                                    <option value="Sen. Schumer, Charles E.">Sen. Schumer, Charles E.</option>
                                                    <option value="Rep. Scott, Robert C. &quot;Bobby&quot;">Rep. Scott, Robert C. "Bobby"</option>
                                                    <option value="Rep. Sensenbrenner, F. James, Jr.">Rep. Sensenbrenner, F. James, Jr.</option>
                                                    <option value="Rep. Serrano, Jose E.">Rep. Serrano, Jose E.</option>
                                                    <option value="Rep. Sessions, Pete">Rep. Sessions, Pete</option>
                                                    <option value="Rep. Shadegg, John B.">Rep. Shadegg, John B.</option>
                                                    <option value="Rep. Shaw, E. Clay, Jr.">Rep. Shaw, E. Clay, Jr.</option>
                                                    <option value="Sen. Shelby, Richard C.">Sen. Shelby, Richard C.</option>
                                                    <option value="Rep. Sherman, Brad">Rep. Sherman, Brad</option>
                                                    <option value="Rep. Shimkus, John">Rep. Shimkus, John</option>
                                                    <option value="Rep. Shuster, Bud">Rep. Shuster, Bud</option>
                                                    <option value="Rep. Sisisky, Norman">Rep. Sisisky, Norman</option>
                                                    <option value="Rep. Skaggs, David E.">Rep. Skaggs, David E.</option>
                                                    <option value="Rep. Skeen, Joe">Rep. Skeen, Joe</option>
                                                    <option value="Rep. Skelton, Ike">Rep. Skelton, Ike</option>
                                                    <option value="Rep. Slaughter, Louise McIntosh">Rep. Slaughter, Louise McIntosh</option>
                                                    <option value="Rep. Smith, Adam">Rep. Smith, Adam</option>
                                                    <option value="Rep. Smith, Christopher H.">Rep. Smith, Christopher H.</option>
                                                    <option value="Rep. Smith, Lamar">Rep. Smith, Lamar</option>
                                                    <option value="Rep. Smith, Linda">Rep. Smith, Linda</option>
                                                    <option value="Rep. Smith, Nick">Rep. Smith, Nick</option>
                                                    <option value="Sen. Smith, Bob">Sen. Smith, Bob</option>
                                                    <option value="Rep. Smith, Robert">Rep. Smith, Robert</option>
                                                    <option value="Rep. Snowbarger, Vince">Rep. Snowbarger, Vince</option>
                                                    <option value="Sen. Snowe, Olympia J.">Sen. Snowe, Olympia J.</option>
                                                    <option value="Rep. Snyder, Vic">Rep. Snyder, Vic</option>
                                                    <option value="Rep. Solomon, Gerald B. H.">Rep. Solomon, Gerald B. H.</option>
                                                    <option value="Sen. Specter, Arlen">Sen. Specter, Arlen</option>
                                                    <option value="Rep. Spence, Floyd">Rep. Spence, Floyd</option>
                                                    <option value="Rep. Spratt, John M., Jr.">Rep. Spratt, John M., Jr.</option>
                                                    <option value="Sen. Stabenow, Debbie">Sen. Stabenow, Debbie</option>
                                                    <option value="Rep. Stark, Fortney Pete">Rep. Stark, Fortney Pete</option>
                                                    <option value="Rep. Stearns, Cliff">Rep. Stearns, Cliff</option>
                                                    <option value="Rep. Stenholm, Charles W.">Rep. Stenholm, Charles W.</option>
                                                    <option value="Sen. Stevens, Ted">Sen. Stevens, Ted</option>
                                                    <option value="Rep. Stockman, Steve">Rep. Stockman, Steve</option>
                                                    <option value="Rep. Stokes, Louis">Rep. Stokes, Louis</option>
                                                    <option value="Rep. Strickland, Ted">Rep. Strickland, Ted</option>
                                                    <option value="Rep. Stump, Bob">Rep. Stump, Bob</option>
                                                    <option value="Rep. Stupak, Bart">Rep. Stupak, Bart</option>
                                                    <option value="Sen. Sununu, John E.">Sen. Sununu, John E.</option>
                                                    <option value="Sen. Sessions, Jeff">Sen. Sessions, Jeff</option>
                                                    <option value="Sen. Smith, Gordon H.">Sen. Smith, Gordon H.</option>
                                                    <option value="Rep. Souder, Mark E.">Rep. Souder, Mark E.</option>
                                                    <option value="Rep. Shays, Christopher">Rep. Shays, Christopher</option>
                                                    <option value="Rep. Schakowsky, Janice D.">Rep. Schakowsky, Janice D.</option>
                                                    <option value="Rep. Sherwood, Don">Rep. Sherwood, Don</option>
                                                    <option value="Rep. Shows, Ronnie">Rep. Shows, Ronnie</option>
                                                    <option value="Rep. Simpson, Michael K.">Rep. Simpson, Michael K.</option>
                                                    <option value="Rep. Sweeney, John E.">Rep. Sweeney, John E.</option>
                                                    <option value="Rep. Schiff, Adam B.">Rep. Schiff, Adam B.</option>
                                                    <option value="Rep. Schrock, Edward L.">Rep. Schrock, Edward L.</option>
                                                    <option value="Rep. Simmons, Rob">Rep. Simmons, Rob</option>
                                                    <option value="Rep. Solis, Hilda L.">Rep. Solis, Hilda L.</option>
                                                    <option value="Rep. Shuster, Bill">Rep. Shuster, Bill</option>
                                                    <option value="Rep. Sullivan, John">Rep. Sullivan, John</option>
                                                    <option value="Rep. Sanchez, Linda T.">Rep. Sanchez, Linda T.</option>
                                                    <option value="Rep. Scott, David">Rep. Scott, David</option>
                                                    <option value="Rep. Salazar, John T.">Rep. Salazar, John T.</option>
                                                    <option value="Rep. Sodrel, Michael E.">Rep. Sodrel, Michael E.</option>
                                                    <option value="Rep. Schwarz, John J.H. &quot;Joe&quot;">Rep. Schwarz, John J.H. "Joe"</option>
                                                    <option value="Rep. Schwartz, Allyson Y.">Rep. Schwartz, Allyson Y.</option>
                                                    <option value="Sen. Salazar, Ken">Sen. Salazar, Ken</option>
                                                    <option value="Rep. Schmidt, Jean">Rep. Schmidt, Jean</option>
                                                    <option value="Rep. Sires, Albio">Rep. Sires, Albio</option>
                                                    <option value="Rep. Sekula Gibbs, Shelley">Rep. Sekula Gibbs, Shelley</option>
                                                    <option value="Rep. Sali, Bill">Rep. Sali, Bill</option>
                                                    <option value="Rep. Sarbanes, John P.">Rep. Sarbanes, John P.</option>
                                                    <option value="Rep. Sestak, Joe">Rep. Sestak, Joe</option>
                                                    <option value="Rep. Shea-Porter, Carol">Rep. Shea-Porter, Carol</option>
                                                    <option value="Rep. Shuler, Heath">Rep. Shuler, Heath</option>
                                                    <option value="Rep. Smith, Adrian">Rep. Smith, Adrian</option>
                                                    <option value="Rep. Space, Zachary T.">Rep. Space, Zachary T.</option>
                                                    <option value="Rep. Sutton, Betty">Rep. Sutton, Betty</option>
                                                    <option value="Rep. Speier, Jackie">Rep. Speier, Jackie</option>
                                                    <option value="Rep. Scalise, Steve">Rep. Scalise, Steve</option>
                                                    <option value="Rep. Sablan, Gregorio Kilili Camacho">Rep. Sablan, Gregorio Kilili Camacho</option>
                                                    <option value="Rep. Schauer, Mark H.">Rep. Schauer, Mark H.</option>
                                                    <option value="Rep. Schock, Aaron">Rep. Schock, Aaron</option>
                                                    <option value="Rep. Schrader, Kurt">Rep. Schrader, Kurt</option>
                                                    <option value="Sen. Shaheen, Jeanne">Sen. Shaheen, Jeanne</option>
                                                    <option value="Rep. Schilling, Robert T.">Rep. Schilling, Robert T.</option>
                                                    <option value="Rep. Schweikert, David">Rep. Schweikert, David</option>
                                                    <option value="Sen. Scott, Tim">Sen. Scott, Tim</option>
                                                    <option value="Rep. Sewell, Terri A.">Rep. Sewell, Terri A.</option>
                                                    <option value="Rep. Southerland, Steve II">Rep. Southerland, Steve II</option>
                                                    <option value="Rep. Stivers, Steve">Rep. Stivers, Steve</option>
                                                    <option value="Rep. Stutzman, Marlin A.">Rep. Stutzman, Marlin A.</option>
                                                    <option value="Rep. Scott, Austin">Rep. Scott, Austin</option>
                                                    <option value="Rep. Schneider, Bradley Scott">Rep. Schneider, Bradley Scott</option>
                                                    <option value="Rep. Sinema, Kyrsten">Rep. Sinema, Kyrsten</option>
                                                    <option value="Rep. Stewart, Chris">Rep. Stewart, Chris</option>
                                                    <option value="Rep. Swalwell, Eric">Rep. Swalwell, Eric</option>
                                                    <option value="Sen. Schatz, Brian">Sen. Schatz, Brian</option>
                                                    <option value="Rep. Smith, Jason">Rep. Smith, Jason</option>
                                                    <option value="Rep. Stefanik, Elise M.">Rep. Stefanik, Elise M.</option>
                                                    <option value="Sen. Sasse, Ben">Sen. Sasse, Ben</option>
                                                    <option value="Sen. Sullivan, Dan">Sen. Sullivan, Dan</option>
                                                    <option value="Rep. Smucker, Lloyd">Rep. Smucker, Lloyd</option>
                                                    <option value="Rep. Soto, Darren">Rep. Soto, Darren</option>
                                                    <option value="Rep. Suozzi, Thomas R.">Rep. Suozzi, Thomas R.</option>
                                                    <option value="Sen. Strange, Luther">Sen. Strange, Luther</option>
                                                    <option value="Sen. Talent, Jim">Sen. Talent, Jim</option>
                                                    <option value="Rep. Tanner, John S.">Rep. Tanner, John S.</option>
                                                    <option value="Rep. Tauscher, Ellen O.">Rep. Tauscher, Ellen O.</option>
                                                    <option value="Rep. Tauzin, W. J. (Billy)">Rep. Tauzin, W. J. (Billy)</option>
                                                    <option value="Rep. Taylor, Charles H.">Rep. Taylor, Charles H.</option>
                                                    <option value="Rep. Taylor, Gene">Rep. Taylor, Gene</option>
                                                    <option value="Rep. Tejeda, Frank">Rep. Tejeda, Frank</option>
                                                    <option value="Sen. Thomas, Craig">Sen. Thomas, Craig</option>
                                                    <option value="Rep. Thomas, William M.">Rep. Thomas, William M.</option>
                                                    <option value="Rep. Thompson, Bennie G.">Rep. Thompson, Bennie G.</option>
                                                    <option value="Rep. Thornberry, Mac">Rep. Thornberry, Mac</option>
                                                    <option value="Sen. Thune, John">Sen. Thune, John</option>
                                                    <option value="Rep. Thurman, Karen L.">Rep. Thurman, Karen L.</option>
                                                    <option value="Sen. Thurmond, Strom">Sen. Thurmond, Strom</option>
                                                    <option value="Rep. Tiahrt, Todd">Rep. Tiahrt, Todd</option>
                                                    <option value="Rep. Tierney, John F.">Rep. Tierney, John F.</option>
                                                    <option value="Rep. Torres, Estaban Edward">Rep. Torres, Estaban Edward</option>
                                                    <option value="Sen. Torricelli, Robert G.">Sen. Torricelli, Robert G.</option>
                                                    <option value="Rep. Towns, Edolphus">Rep. Towns, Edolphus</option>
                                                    <option value="Rep. Traficant, James A., Jr.">Rep. Traficant, James A., Jr.</option>
                                                    <option value="Rep. Turner, Jim">Rep. Turner, Jim</option>
                                                    <option value="Sen. Thompson, Fred">Sen. Thompson, Fred</option>
                                                    <option value="Rep. Tancredo, Thomas G.">Rep. Tancredo, Thomas G.</option>
                                                    <option value="Rep. Terry, Lee">Rep. Terry, Lee</option>
                                                    <option value="Rep. Thompson, Mike">Rep. Thompson, Mike</option>
                                                    <option value="Sen. Toomey, Pat">Sen. Toomey, Pat</option>
                                                    <option value="Rep. Tiberi, Patrick J.">Rep. Tiberi, Patrick J.</option>
                                                    <option value="Rep. Turner, Michael R.">Rep. Turner, Michael R.</option>
                                                    <option value="Sen. Tester, Jon">Sen. Tester, Jon</option>
                                                    <option value="Rep. Tsongas, Niki">Rep. Tsongas, Niki</option>
                                                    <option value="Rep. Teague, Harry">Rep. Teague, Harry</option>
                                                    <option value="Rep. Thompson, Glenn">Rep. Thompson, Glenn</option>
                                                    <option value="Rep. Titus, Dina">Rep. Titus, Dina</option>
                                                    <option value="Rep. Tonko, Paul">Rep. Tonko, Paul</option>
                                                    <option value="Rep. Tipton, Scott R.">Rep. Tipton, Scott R.</option>
                                                    <option value="Rep. Turner, Robert L.">Rep. Turner, Robert L.</option>
                                                    <option value="Rep. Takano, Mark">Rep. Takano, Mark</option>
                                                    <option value="Rep. Takai, Mark">Rep. Takai, Mark</option>
                                                    <option value="Rep. Torres, Norma J.">Rep. Torres, Norma J.</option>
                                                    <option value="Rep. Trott, David A.">Rep. Trott, David A.</option>
                                                    <option value="Sen. Tillis, Thom">Sen. Tillis, Thom</option>
                                                    <option value="Rep. Taylor, Scott">Rep. Taylor, Scott</option>
                                                    <option value="Rep. Tenney, Claudia">Rep. Tenney, Claudia</option>
                                                    <option value="Rep. Underwood, Robert A.">Rep. Underwood, Robert A.</option>
                                                    <option value="Rep. Upton, Fred">Rep. Upton, Fred</option>
                                                    <option value="Sen. Udall, Mark">Sen. Udall, Mark</option>
                                                    <option value="Sen. Udall, Tom">Sen. Udall, Tom</option>
                                                    <option value="Rep. Velazquez, Nydia M.">Rep. Velazquez, Nydia M.</option>
                                                    <option value="Rep. Vento, Bruce F.">Rep. Vento, Bruce F.</option>
                                                    <option value="Rep. Visclosky, Peter J.">Rep. Visclosky, Peter J.</option>
                                                    <option value="Sen. Voinovich, George V.">Sen. Voinovich, George V.</option>
                                                    <option value="Sen. Vitter, David">Sen. Vitter, David</option>
                                                    <option value="Sen. Van Hollen, Chris">Sen. Van Hollen, Chris</option>
                                                    <option value="Rep. Valadao, David G.">Rep. Valadao, David G.</option>
                                                    <option value="Rep. Vargas, Juan">Rep. Vargas, Juan</option>
                                                    <option value="Rep. Veasey, Marc A.">Rep. Veasey, Marc A.</option>
                                                    <option value="Rep. Vela, Filemon">Rep. Vela, Filemon</option>
                                                    <option value="Rep. Walsh, James T.">Rep. Walsh, James T.</option>
                                                    <option value="Rep. Wamp, Zach">Rep. Wamp, Zach</option>
                                                    <option value="Sen. Warner, John">Sen. Warner, John</option>
                                                    <option value="Rep. Waters, Maxine">Rep. Waters, Maxine</option>
                                                    <option value="Rep. Watkins, Wes">Rep. Watkins, Wes</option>
                                                    <option value="Rep. Watt, Melvin L.">Rep. Watt, Melvin L.</option>
                                                    <option value="Rep. Watts, J. C., Jr.">Rep. Watts, J. C., Jr.</option>
                                                    <option value="Rep. Waxman, Henry A.">Rep. Waxman, Henry A.</option>
                                                    <option value="Rep. Weldon, Dave">Rep. Weldon, Dave</option>
                                                    <option value="Rep. Weldon, Curt">Rep. Weldon, Curt</option>
                                                    <option value="Rep. Weller, Jerry">Rep. Weller, Jerry</option>
                                                    <option value="Sen. Wellstone, Paul D.">Sen. Wellstone, Paul D.</option>
                                                    <option value="Rep. Wexler, Robert">Rep. Wexler, Robert</option>
                                                    <option value="Rep. Weygand, Robert A.">Rep. Weygand, Robert A.</option>
                                                    <option value="Rep. White, Rick">Rep. White, Rick</option>
                                                    <option value="Rep. Whitfield, Ed">Rep. Whitfield, Ed</option>
                                                    <option value="Sen. Wicker, Roger F.">Sen. Wicker, Roger F.</option>
                                                    <option value="Rep. Wise, Robert E., Jr.">Rep. Wise, Robert E., Jr.</option>
                                                    <option value="Rep. Wolf, Frank R.">Rep. Wolf, Frank R.</option>
                                                    <option value="Rep. Woolsey, Lynn C.">Rep. Woolsey, Lynn C.</option>
                                                    <option value="Sen. Wyden, Ron">Sen. Wyden, Ron</option>
                                                    <option value="Rep. Wynn, Albert Russell">Rep. Wynn, Albert Russell</option>
                                                    <option value="Rep. Wilson, Heather">Rep. Wilson, Heather</option>
                                                    <option value="Rep. Walden, Greg">Rep. Walden, Greg</option>
                                                    <option value="Rep. Weiner, Anthony D.">Rep. Weiner, Anthony D.</option>
                                                    <option value="Rep. Wu, David">Rep. Wu, David</option>
                                                    <option value="Rep. Watson, Diane E.">Rep. Watson, Diane E.</option>
                                                    <option value="Rep. Wilson, Joe">Rep. Wilson, Joe</option>
                                                    <option value="Rep. Westmoreland, Lynn A.">Rep. Westmoreland, Lynn A.</option>
                                                    <option value="Rep. Wasserman Schultz, Debbie">Rep. Wasserman Schultz, Debbie</option>
                                                    <option value="Rep. Walberg, Tim">Rep. Walberg, Tim</option>
                                                    <option value="Rep. Walz, Timothy J.">Rep. Walz, Timothy J.</option>
                                                    <option value="Rep. Welch, Peter">Rep. Welch, Peter</option>
                                                    <option value="Rep. Wilson, Charles A.">Rep. Wilson, Charles A.</option>
                                                    <option value="Sen. Whitehouse, Sheldon">Sen. Whitehouse, Sheldon</option>
                                                    <option value="Sen. Webb, Jim">Sen. Webb, Jim</option>
                                                    <option value="Rep. Wittman, Robert J.">Rep. Wittman, Robert J.</option>
                                                    <option value="Sen. Warner, Mark R.">Sen. Warner, Mark R.</option>
                                                    <option value="Rep. Webster, Daniel">Rep. Webster, Daniel</option>
                                                    <option value="Rep. West, Allen B.">Rep. West, Allen B.</option>
                                                    <option value="Rep. Wilson, Frederica S.">Rep. Wilson, Frederica S.</option>
                                                    <option value="Rep. Womack, Steve">Rep. Womack, Steve</option>
                                                    <option value="Rep. Woodall, Rob">Rep. Woodall, Rob</option>
                                                    <option value="Rep. Walsh, Joe">Rep. Walsh, Joe</option>
                                                    <option value="Rep. Wagner, Ann">Rep. Wagner, Ann</option>
                                                    <option value="Rep. Walorski, Jackie">Rep. Walorski, Jackie</option>
                                                    <option value="Rep. Weber, Randy K., Sr.">Rep. Weber, Randy K., Sr.</option>
                                                    <option value="Rep. Wenstrup, Brad R.">Rep. Wenstrup, Brad R.</option>
                                                    <option value="Rep. Williams, Roger">Rep. Williams, Roger</option>
                                                    <option value="Sen. Warren, Elizabeth">Sen. Warren, Elizabeth</option>
                                                    <option value="Sen. Walsh, John E.">Sen. Walsh, John E.</option>
                                                    <option value="Rep. Walker, Mark">Rep. Walker, Mark</option>
                                                    <option value="Rep. Walters, Mimi">Rep. Walters, Mimi</option>
                                                    <option value="Rep. Westerman, Bruce">Rep. Westerman, Bruce</option>
                                                    <option value="Rep. Watson Coleman, Bonnie">Rep. Watson Coleman, Bonnie</option>
                                                    <option value="Rep. Rogers, Mike J.">Rep. Rogers, Mike J.</option>
                                                    <option value="Rep. Yates, Sidney R.">Rep. Yates, Sidney R.</option>
                                                    <option value="Rep. Young, C. W. Bill">Rep. Young, C. W. Bill</option>
                                                    <option value="Rep. Young, Don">Rep. Young, Don</option>
                                                    <option value="Rep. Yarmuth, John A.">Rep. Yarmuth, John A.</option>
                                                    <option value="Rep. Yoder, Kevin">Rep. Yoder, Kevin</option>
                                                    <option value="Sen. Young, Todd C.">Sen. Young, Todd C.</option>
                                                    <option value="Rep. Yoho, Ted S.">Rep. Yoho, Ted S.</option>
                                                    <option value="Rep. Young, David">Rep. Young, David</option>
                                                    <option value="Rep. Zeldin, Lee M.">Rep. Zeldin, Lee M.</option>
                                                    <option value="Rep. Zinke, Ryan K.">Rep. Zinke, Ryan K.</option>
                                                    </select><span className="select2 select2-container select2-container--default" dir="ltr" style="width: 236px;"><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" title="Search for legislation by Sponsor Name." tabindex="-1"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="Type or Select Sponsor Name" style="width: 236px;"></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </li>
                                            <li id="coSponsorList" className="">
                                                <label for="coSponsor">
                                                    Cosponsor
                                                </label>
                                                <select multiple="" name="coSponsor" id="coSponsor" data-cosponsor="" className="js-select2 select2-hidden-accessible" data-placeholder="Type or Select Cosponsor Name" tabindex="-1" aria-hidden="true">
                                                    <option value="Rep. Abercrombie, Neil">Rep. Abercrombie, Neil</option>
                                                    <option value="Rep. Ackerman, Gary L.">Rep. Ackerman, Gary L.</option>
                                                    <option value="Rep. Aderholt, Robert B.">Rep. Aderholt, Robert B.</option>
                                                    <option value="Sen. Akaka, Daniel K.">Sen. Akaka, Daniel K.</option>
                                                    <option value="Sen. Allard, Wayne">Sen. Allard, Wayne</option>
                                                    <option value="Sen. Allen, George">Sen. Allen, George</option>
                                                    <option value="Rep. Andrews, Robert E.">Rep. Andrews, Robert E.</option>
                                                    <option value="Rep. Archer, Bill">Rep. Archer, Bill</option>
                                                    <option value="Rep. Armey, Richard K.">Rep. Armey, Richard K.</option>
                                                    <option value="Sen. Abraham, Spencer">Sen. Abraham, Spencer</option>
                                                    <option value="Sen. Ashcroft, John">Sen. Ashcroft, John</option>
                                                    <option value="Rep. Allen, Thomas H.">Rep. Allen, Thomas H.</option>
                                                    <option value="Rep. Akin, W. Todd">Rep. Akin, W. Todd</option>
                                                    <option value="Rep. Acevedo-Vila, Anibal">Rep. Acevedo-Vila, Anibal</option>
                                                    <option value="Sen. Alexander, Lamar">Sen. Alexander, Lamar</option>
                                                    <option value="Rep. Alexander, Rodney">Rep. Alexander, Rodney</option>
                                                    <option value="Rep. Altmire, Jason">Rep. Altmire, Jason</option>
                                                    <option value="Rep. Arcuri, Michael A.">Rep. Arcuri, Michael A.</option>
                                                    <option value="Rep. Adler, John H.">Rep. Adler, John H.</option>
                                                    <option value="Rep. Austria, Steve">Rep. Austria, Steve</option>
                                                    <option value="Rep. Adams, Sandy">Rep. Adams, Sandy</option>
                                                    <option value="Rep. Amash, Justin">Rep. Amash, Justin</option>
                                                    <option value="Sen. Ayotte, Kelly">Sen. Ayotte, Kelly</option>
                                                    <option value="Rep. Amodei, Mark E.">Rep. Amodei, Mark E.</option>
                                                    <option value="Rep. Adams, Alma S.">Rep. Adams, Alma S.</option>
                                                    <option value="Rep. Aguilar, Pete">Rep. Aguilar, Pete</option>
                                                    <option value="Rep. Allen, Rick W.">Rep. Allen, Rick W.</option>
                                                    <option value="Rep. Ashford, Brad">Rep. Ashford, Brad</option>
                                                    <option value="Rep. Abraham, Ralph Lee">Rep. Abraham, Ralph Lee</option>
                                                    <option value="Rep. Arrington, Jodey C.">Rep. Arrington, Jodey C.</option>
                                                    <option value="Rep. Bachus, Spencer">Rep. Bachus, Spencer</option>
                                                    <option value="Rep. Baesler, Scotty">Rep. Baesler, Scotty</option>
                                                    <option value="Rep. Baker, Richard H.">Rep. Baker, Richard H.</option>
                                                    <option value="Rep. Baldacci, John Elias">Rep. Baldacci, John Elias</option>
                                                    <option value="Rep. Ballenger, Cass">Rep. Ballenger, Cass</option>
                                                    <option value="Rep. Barcia, James A.">Rep. Barcia, James A.</option>
                                                    <option value="Rep. Barr, Bob">Rep. Barr, Bob</option>
                                                    <option value="Rep. Barrett, Thomas M.">Rep. Barrett, Thomas M.</option>
                                                    <option value="Rep. Barrett, Bill">Rep. Barrett, Bill</option>
                                                    <option value="Rep. Bartlett, Roscoe G.">Rep. Bartlett, Roscoe G.</option>
                                                    <option value="Rep. Barton, Joe">Rep. Barton, Joe</option>
                                                    <option value="Rep. Bass, Charles F.">Rep. Bass, Charles F.</option>
                                                    <option value="Rep. Bateman, Herbert H.">Rep. Bateman, Herbert H.</option>
                                                    <option value="Sen. Baucus, Max">Sen. Baucus, Max</option>
                                                    <option value="Rep. Becerra, Xavier">Rep. Becerra, Xavier</option>
                                                    <option value="Sen. Bennett, Robert F.">Sen. Bennett, Robert F.</option>
                                                    <option value="Rep. Bentsen, Ken">Rep. Bentsen, Ken</option>
                                                    <option value="Rep. Bereuter, Doug">Rep. Bereuter, Doug</option>
                                                    <option value="Rep. Berman, Howard L.">Rep. Berman, Howard L.</option>
                                                    <option value="Rep. Berry, Marion">Rep. Berry, Marion</option>
                                                    <option value="Sen. Biden, Joseph R., Jr.">Sen. Biden, Joseph R., Jr.</option>
                                                    <option value="Rep. Bilbray, Brian P.">Rep. Bilbray, Brian P.</option>
                                                    <option value="Rep. Bilirakis, Michael">Rep. Bilirakis, Michael</option>
                                                    <option value="Sen. Bingaman, Jeff">Sen. Bingaman, Jeff</option>
                                                    <option value="Rep. Bishop, Sanford D., Jr.">Rep. Bishop, Sanford D., Jr.</option>
                                                    <option value="Rep. Blagojevich, Rod R.">Rep. Blagojevich, Rod R.</option>
                                                    <option value="Rep. Bliley, Tom">Rep. Bliley, Tom</option>
                                                    <option value="Rep. Blumenauer, Earl">Rep. Blumenauer, Earl</option>
                                                    <option value="Sen. Blunt, Roy">Sen. Blunt, Roy</option>
                                                    <option value="Rep. Boehlert, Sherwood">Rep. Boehlert, Sherwood</option>
                                                    <option value="Rep. Boehner, John A.">Rep. Boehner, John A.</option>
                                                    <option value="Sen. Bond, Christopher S.">Sen. Bond, Christopher S.</option>
                                                    <option value="Rep. Bonilla, Henry">Rep. Bonilla, Henry</option>
                                                    <option value="Rep. Bonior, David E.">Rep. Bonior, David E.</option>
                                                    <option value="Rep. Bono, Sonny">Rep. Bono, Sonny</option>
                                                    <option value="Rep. Borski, Robert A.">Rep. Borski, Robert A.</option>
                                                    <option value="Rep. Boswell, Leonard L.">Rep. Boswell, Leonard L.</option>
                                                    <option value="Rep. Boucher, Rick">Rep. Boucher, Rick</option>
                                                    <option value="Sen. Boxer, Barbara">Sen. Boxer, Barbara</option>
                                                    <option value="Rep. Boyd, Allen">Rep. Boyd, Allen</option>
                                                    <option value="Rep. Brady, Kevin">Rep. Brady, Kevin</option>
                                                    <option value="Sen. Breaux, John B.">Sen. Breaux, John B.</option>
                                                    <option value="Rep. Brown, Corrine">Rep. Brown, Corrine</option>
                                                    <option value="Rep. Brown, George E., Jr.">Rep. Brown, George E., Jr.</option>
                                                    <option value="Sen. Brown, Sherrod">Sen. Brown, Sherrod</option>
                                                    <option value="Sen. Brownback, Sam">Sen. Brownback, Sam</option>
                                                    <option value="Sen. Bryan, Richard H.">Sen. Bryan, Richard H.</option>
                                                    <option value="Rep. Bryant, Ed">Rep. Bryant, Ed</option>
                                                    <option value="Sen. Bumpers, Dale">Sen. Bumpers, Dale</option>
                                                    <option value="Sen. Bunning, Jim">Sen. Bunning, Jim</option>
                                                    <option value="Sen. Burns, Conrad R.">Sen. Burns, Conrad R.</option>
                                                    <option value="Sen. Burr, Richard">Sen. Burr, Richard</option>
                                                    <option value="Rep. Burton, Dan">Rep. Burton, Dan</option>
                                                    <option value="Rep. Buyer, Steve">Rep. Buyer, Steve</option>
                                                    <option value="Sen. Byrd, Robert C.">Sen. Byrd, Robert C.</option>
                                                    <option value="Rep. Brady, Robert A.">Rep. Brady, Robert A.</option>
                                                    <option value="Rep. Bono Mack, Mary">Rep. Bono Mack, Mary</option>
                                                    <option value="Rep. Baird, Brian">Rep. Baird, Brian</option>
                                                    <option value="Sen. Baldwin, Tammy">Sen. Baldwin, Tammy</option>
                                                    <option value="Rep. Berkley, Shelley">Rep. Berkley, Shelley</option>
                                                    <option value="Rep. Biggert, Judy">Rep. Biggert, Judy</option>
                                                    <option value="Sen. Bayh, Evan">Sen. Bayh, Evan</option>
                                                    <option value="Rep. Baca, Joe">Rep. Baca, Joe</option>
                                                    <option value="Rep. Brown, Henry E., Jr.">Rep. Brown, Henry E., Jr.</option>
                                                    <option value="Sen. Boozman, John">Sen. Boozman, John</option>
                                                    <option value="Sen. Barkley, Dean M.">Sen. Barkley, Dean M.</option>
                                                    <option value="Rep. Ballance, Frank W., Jr.">Rep. Ballance, Frank W., Jr.</option>
                                                    <option value="Rep. Barrett, J. Gresham">Rep. Barrett, J. Gresham</option>
                                                    <option value="Rep. Beauprez, Bob">Rep. Beauprez, Bob</option>
                                                    <option value="Rep. Bell, Chris">Rep. Bell, Chris</option>
                                                    <option value="Rep. Bishop, Timothy H.">Rep. Bishop, Timothy H.</option>
                                                    <option value="Rep. Blackburn, Marsha">Rep. Blackburn, Marsha</option>
                                                    <option value="Rep. Bonner, Jo">Rep. Bonner, Jo</option>
                                                    <option value="Rep. Bordallo, Madeleine Z.">Rep. Bordallo, Madeleine Z.</option>
                                                    <option value="Rep. Bradley, Jeb">Rep. Bradley, Jeb</option>
                                                    <option value="Rep. Brown-Waite, Ginny">Rep. Brown-Waite, Ginny</option>
                                                    <option value="Rep. Burgess, Michael C.">Rep. Burgess, Michael C.</option>
                                                    <option value="Rep. Burns, Max">Rep. Burns, Max</option>
                                                    <option value="Rep. Bishop, Rob">Rep. Bishop, Rob</option>
                                                    <option value="Rep. Butterfield, G. K.">Rep. Butterfield, G. K.</option>
                                                    <option value="Rep. Barrow, John">Rep. Barrow, John</option>
                                                    <option value="Rep. Bean, Melissa L.">Rep. Bean, Melissa L.</option>
                                                    <option value="Rep. Boren, Dan">Rep. Boren, Dan</option>
                                                    <option value="Rep. Boustany, Charles W., Jr.">Rep. Boustany, Charles W., Jr.</option>
                                                    <option value="Rep. Bachmann, Michele">Rep. Bachmann, Michele</option>
                                                    <option value="Rep. Bilirakis, Gus M.">Rep. Bilirakis, Gus M.</option>
                                                    <option value="Rep. Boyda, Nancy E.">Rep. Boyda, Nancy E.</option>
                                                    <option value="Rep. Braley, Bruce L.">Rep. Braley, Bruce L.</option>
                                                    <option value="Rep. Buchanan, Vern">Rep. Buchanan, Vern</option>
                                                    <option value="Sen. Barrasso, John">Sen. Barrasso, John</option>
                                                    <option value="Rep. Broun, Paul C.">Rep. Broun, Paul C.</option>
                                                    <option value="Rep. Boccieri, John A.">Rep. Boccieri, John A.</option>
                                                    <option value="Rep. Bright, Bobby">Rep. Bright, Bobby</option>
                                                    <option value="Sen. Begich, Mark">Sen. Begich, Mark</option>
                                                    <option value="Sen. Burris, Roland">Sen. Burris, Roland</option>
                                                    <option value="Sen. Bennet, Michael F.">Sen. Bennet, Michael F.</option>
                                                    <option value="Sen. Brown, Scott P.">Sen. Brown, Scott P.</option>
                                                    <option value="Rep. Barletta, Lou">Rep. Barletta, Lou</option>
                                                    <option value="Rep. Bass, Karen">Rep. Bass, Karen</option>
                                                    <option value="Rep. Benishek, Dan">Rep. Benishek, Dan</option>
                                                    <option value="Rep. Berg, Rick">Rep. Berg, Rick</option>
                                                    <option value="Rep. Black, Diane">Rep. Black, Diane</option>
                                                    <option value="Rep. Brooks, Mo">Rep. Brooks, Mo</option>
                                                    <option value="Rep. Bucshon, Larry">Rep. Bucshon, Larry</option>
                                                    <option value="Rep. Buerkle, Ann Marie">Rep. Buerkle, Ann Marie</option>
                                                    <option value="Sen. Blumenthal, Richard">Sen. Blumenthal, Richard</option>
                                                    <option value="Rep. Bonamici, Suzanne">Rep. Bonamici, Suzanne</option>
                                                    <option value="Rep. Barber, Ron">Rep. Barber, Ron</option>
                                                    <option value="Rep. Bentivolio, Kerry L.">Rep. Bentivolio, Kerry L.</option>
                                                    <option value="Rep. Beatty, Joyce">Rep. Beatty, Joyce</option>
                                                    <option value="Rep. Barr, Andy">Rep. Barr, Andy</option>
                                                    <option value="Rep. Bridenstine, Jim">Rep. Bridenstine, Jim</option>
                                                    <option value="Rep. Brooks, Susan W.">Rep. Brooks, Susan W.</option>
                                                    <option value="Rep. Brownley, Julia">Rep. Brownley, Julia</option>
                                                    <option value="Rep. Bustos, Cheri">Rep. Bustos, Cheri</option>
                                                    <option value="Rep. Bera, Ami">Rep. Bera, Ami</option>
                                                    <option value="Sen. Booker, Cory A.">Sen. Booker, Cory A.</option>
                                                    <option value="Rep. Byrne, Bradley">Rep. Byrne, Bradley</option>
                                                    <option value="Rep. Brat, Dave">Rep. Brat, Dave</option>
                                                    <option value="Rep. Babin, Brian">Rep. Babin, Brian</option>
                                                    <option value="Rep. Beyer, Donald S., Jr.">Rep. Beyer, Donald S., Jr.</option>
                                                    <option value="Rep. Bishop, Mike">Rep. Bishop, Mike</option>
                                                    <option value="Rep. Blum, Rod">Rep. Blum, Rod</option>
                                                    <option value="Rep. Bost, Mike">Rep. Bost, Mike</option>
                                                    <option value="Rep. Boyle, Brendan F.">Rep. Boyle, Brendan F.</option>
                                                    <option value="Rep. Buck, Ken">Rep. Buck, Ken</option>
                                                    <option value="Rep. Bacon, Don">Rep. Bacon, Don</option>
                                                    <option value="Rep. Banks, Jim">Rep. Banks, Jim</option>
                                                    <option value="Rep. Barragan, Nanette Diaz">Rep. Barragan, Nanette Diaz</option>
                                                    <option value="Rep. Bergman, Jack">Rep. Bergman, Jack</option>
                                                    <option value="Rep. Biggs, Andy">Rep. Biggs, Andy</option>
                                                    <option value="Rep. Blunt Rochester, Lisa">Rep. Blunt Rochester, Lisa</option>
                                                    <option value="Rep. Brown, Anthony G.">Rep. Brown, Anthony G.</option>
                                                    <option value="Rep. Budd, Ted">Rep. Budd, Ted</option>
                                                    <option value="Rep. Callahan, Sonny">Rep. Callahan, Sonny</option>
                                                    <option value="Rep. Calvert, Ken">Rep. Calvert, Ken</option>
                                                    <option value="Rep. Camp, Dave">Rep. Camp, Dave</option>
                                                    <option value="Sen. Campbell, Ben Nighthorse">Sen. Campbell, Ben Nighthorse</option>
                                                    <option value="Rep. Campbell, Tom">Rep. Campbell, Tom</option>
                                                    <option value="Rep. Canady, Charles T.">Rep. Canady, Charles T.</option>
                                                    <option value="Rep. Cannon, Chris">Rep. Cannon, Chris</option>
                                                    <option value="Sen. Cantwell, Maria">Sen. Cantwell, Maria</option>
                                                    <option value="Rep. Capps, Walter">Rep. Capps, Walter</option>
                                                    <option value="Sen. Cardin, Benjamin L.">Sen. Cardin, Benjamin L.</option>
                                                    <option value="Sen. Carper, Thomas R.">Sen. Carper, Thomas R.</option>
                                                    <option value="Rep. Carson, Julia">Rep. Carson, Julia</option>
                                                    <option value="Rep. Castle, Michael N.">Rep. Castle, Michael N.</option>
                                                    <option value="Rep. Chabot, Steve">Rep. Chabot, Steve</option>
                                                    <option value="Sen. Chafee, John H.">Sen. Chafee, John H.</option>
                                                    <option value="Sen. Chambliss, Saxby">Sen. Chambliss, Saxby</option>
                                                    <option value="Rep. Chenoweth-Hage, Helen">Rep. Chenoweth-Hage, Helen</option>
                                                    <option value="Rep. Christensen, Jon">Rep. Christensen, Jon</option>
                                                    <option value="Rep. Christensen, Donna M.">Rep. Christensen, Donna M.</option>
                                                    <option value="Rep. Clay, William (Bill)">Rep. Clay, William (Bill)</option>
                                                    <option value="Rep. Clayton, Eva M.">Rep. Clayton, Eva M.</option>
                                                    <option value="Rep. Clement, Bob">Rep. Clement, Bob</option>
                                                    <option value="Rep. Clyburn, James E.">Rep. Clyburn, James E.</option>
                                                    <option value="Sen. Coats, Daniel">Sen. Coats, Daniel</option>
                                                    <option value="Rep. Coble, Howard">Rep. Coble, Howard</option>
                                                    <option value="Sen. Coburn, Tom">Sen. Coburn, Tom</option>
                                                    <option value="Sen. Cochran, Thad">Sen. Cochran, Thad</option>
                                                    <option value="Rep. Collins, Mac">Rep. Collins, Mac</option>
                                                    <option value="Rep. Combest, Larry">Rep. Combest, Larry</option>
                                                    <option value="Rep. Condit, Gary A.">Rep. Condit, Gary A.</option>
                                                    <option value="Sen. Conrad, Kent">Sen. Conrad, Kent</option>
                                                    <option value="Rep. Conyers, John, Jr.">Rep. Conyers, John, Jr.</option>
                                                    <option value="Rep. Cook, Merrill">Rep. Cook, Merrill</option>
                                                    <option value="Rep. Cooksey, John">Rep. Cooksey, John</option>
                                                    <option value="Rep. Cooper, Jim">Rep. Cooper, Jim</option>
                                                    <option value="Rep. Costello, Jerry F.">Rep. Costello, Jerry F.</option>
                                                    <option value="Sen. Coverdell, Paul">Sen. Coverdell, Paul</option>
                                                    <option value="Rep. Cox, Christopher">Rep. Cox, Christopher</option>
                                                    <option value="Rep. Coyne, William J.">Rep. Coyne, William J.</option>
                                                    <option value="Sen. Craig, Larry E.">Sen. Craig, Larry E.</option>
                                                    <option value="Rep. Cramer, Robert E. (Bud), Jr.">Rep. Cramer, Robert E. (Bud), Jr.</option>
                                                    <option value="Rep. Crane, Philip M.">Rep. Crane, Philip M.</option>
                                                    <option value="Sen. Crapo, Mike">Sen. Crapo, Mike</option>
                                                    <option value="Rep. Cubin, Barbara">Rep. Cubin, Barbara</option>
                                                    <option value="Rep. Cummings, Elijah E.">Rep. Cummings, Elijah E.</option>
                                                    <option value="Rep. Cunningham, Randy (Duke)">Rep. Cunningham, Randy (Duke)</option>
                                                    <option value="Sen. Cleland, Max">Sen. Cleland, Max</option>
                                                    <option value="Sen. Collins, Susan M.">Sen. Collins, Susan M.</option>
                                                    <option value="Rep. Capps, Lois">Rep. Capps, Lois</option>
                                                    <option value="Rep. Capuano, Michael E.">Rep. Capuano, Michael E.</option>
                                                    <option value="Rep. Crowley, Joseph">Rep. Crowley, Joseph</option>
                                                    <option value="Sen. Chafee, Lincoln">Sen. Chafee, Lincoln</option>
                                                    <option value="Sen. Clinton, Hillary Rodham">Sen. Clinton, Hillary Rodham</option>
                                                    <option value="Sen. Corzine, Jon S.">Sen. Corzine, Jon S.</option>
                                                    <option value="Sen. Carnahan, Jean">Sen. Carnahan, Jean</option>
                                                    <option value="Rep. Carson, Brad">Rep. Carson, Brad</option>
                                                    <option value="Rep. Crenshaw, Ander">Rep. Crenshaw, Ander</option>
                                                    <option value="Rep. Cantor, Eric">Rep. Cantor, Eric</option>
                                                    <option value="Sen. Capito, Shelley Moore">Sen. Capito, Shelley Moore</option>
                                                    <option value="Rep. Culberson, John Abney">Rep. Culberson, John Abney</option>
                                                    <option value="Rep. Clay, Wm. Lacy">Rep. Clay, Wm. Lacy</option>
                                                    <option value="Rep. Cardoza, Dennis A.">Rep. Cardoza, Dennis A.</option>
                                                    <option value="Rep. Carter, John R.">Rep. Carter, John R.</option>
                                                    <option value="Rep. Chocola, Chris">Rep. Chocola, Chris</option>
                                                    <option value="Rep. Cole, Tom">Rep. Cole, Tom</option>
                                                    <option value="Rep. Case, Ed">Rep. Case, Ed</option>
                                                    <option value="Sen. Cornyn, John">Sen. Cornyn, John</option>
                                                    <option value="Sen. Coleman, Norm">Sen. Coleman, Norm</option>
                                                    <option value="Rep. Chandler, Ben">Rep. Chandler, Ben</option>
                                                    <option value="Rep. Costa, Jim">Rep. Costa, Jim</option>
                                                    <option value="Rep. Carnahan, Russ">Rep. Carnahan, Russ</option>
                                                    <option value="Rep. Cleaver, Emanuel">Rep. Cleaver, Emanuel</option>
                                                    <option value="Rep. Conaway, K. Michael">Rep. Conaway, K. Michael</option>
                                                    <option value="Rep. Cuellar, Henry">Rep. Cuellar, Henry</option>
                                                    <option value="Rep. Campbell, John">Rep. Campbell, John</option>
                                                    <option value="Rep. Carney, Christopher P.">Rep. Carney, Christopher P.</option>
                                                    <option value="Rep. Castor, Kathy">Rep. Castor, Kathy</option>
                                                    <option value="Rep. Clarke, Yvette D.">Rep. Clarke, Yvette D.</option>
                                                    <option value="Rep. Cohen, Steve">Rep. Cohen, Steve</option>
                                                    <option value="Rep. Courtney, Joe">Rep. Courtney, Joe</option>
                                                    <option value="Sen. Casey, Robert P., Jr.">Sen. Casey, Robert P., Jr.</option>
                                                    <option value="Sen. Corker, Bob">Sen. Corker, Bob</option>
                                                    <option value="Rep. Carson, Andre">Rep. Carson, Andre</option>
                                                    <option value="Rep. Cazayoux, Donald J., Jr.">Rep. Cazayoux, Donald J., Jr.</option>
                                                    <option value="Rep. Childers, Travis">Rep. Childers, Travis</option>
                                                    <option value="Sen. Cassidy, Bill">Sen. Cassidy, Bill</option>
                                                    <option value="Rep. Chaffetz, Jason">Rep. Chaffetz, Jason</option>
                                                    <option value="Rep. Coffman, Mike">Rep. Coffman, Mike</option>
                                                    <option value="Rep. Connolly, Gerald E.">Rep. Connolly, Gerald E.</option>
                                                    <option value="Rep. Cao, Anh &quot;Joseph&quot;">Rep. Cao, Anh "Joseph"</option>
                                                    <option value="Rep. Chu, Judy">Rep. Chu, Judy</option>
                                                    <option value="Rep. Critz, Mark S.">Rep. Critz, Mark S.</option>
                                                    <option value="Rep. Canseco, Francisco &quot;Quico&quot;">Rep. Canseco, Francisco "Quico"</option>
                                                    <option value="Rep. Carney, John C., Jr.">Rep. Carney, John C., Jr.</option>
                                                    <option value="Rep. Cicilline, David N.">Rep. Cicilline, David N.</option>
                                                    <option value="Rep. Clarke, Hansen">Rep. Clarke, Hansen</option>
                                                    <option value="Rep. Cravaack, Chip">Rep. Cravaack, Chip</option>
                                                    <option value="Rep. Crawford, Eric A. &quot;Rick&quot;">Rep. Crawford, Eric A. "Rick"</option>
                                                    <option value="Sen. Coons, Christopher A.">Sen. Coons, Christopher A.</option>
                                                    <option value="Rep. Curson, David Alan">Rep. Curson, David Alan</option>
                                                    <option value="Rep. Cartwright, Matt">Rep. Cartwright, Matt</option>
                                                    <option value="Rep. Castro, Joaquin">Rep. Castro, Joaquin</option>
                                                    <option value="Rep. Collins, Chris">Rep. Collins, Chris</option>
                                                    <option value="Rep. Collins, Doug">Rep. Collins, Doug</option>
                                                    <option value="Rep. Cook, Paul">Rep. Cook, Paul</option>
                                                    <option value="Sen. Cotton, Tom">Sen. Cotton, Tom</option>
                                                    <option value="Rep. Cramer, Kevin">Rep. Cramer, Kevin</option>
                                                    <option value="Rep. Cardenas, Tony">Rep. Cardenas, Tony</option>
                                                    <option value="Sen. Cruz, Ted">Sen. Cruz, Ted</option>
                                                    <option value="Sen. Cowan, William M.">Sen. Cowan, William M.</option>
                                                    <option value="Sen. Chiesa, Jeff">Sen. Chiesa, Jeff</option>
                                                    <option value="Rep. Clark, Katherine M.">Rep. Clark, Katherine M.</option>
                                                    <option value="Rep. Clawson, Curt">Rep. Clawson, Curt</option>
                                                    <option value="Rep. Carter, Earl L. &quot;Buddy&quot;">Rep. Carter, Earl L. "Buddy"</option>
                                                    <option value="Rep. Comstock, Barbara">Rep. Comstock, Barbara</option>
                                                    <option value="Rep. Costello, Ryan A.">Rep. Costello, Ryan A.</option>
                                                    <option value="Rep. Curbelo, Carlos">Rep. Curbelo, Carlos</option>
                                                    <option value="Rep. Comer, James">Rep. Comer, James</option>
                                                    <option value="Rep. Cheney, Liz">Rep. Cheney, Liz</option>
                                                    <option value="Rep. Correa, J. Luis">Rep. Correa, J. Luis</option>
                                                    <option value="Rep. Crist, Charlie">Rep. Crist, Charlie</option>
                                                    <option value="Rep. Carbajal, Salud O.">Rep. Carbajal, Salud O.</option>
                                                    <option value="Sen. Cortez Masto, Catherine">Sen. Cortez Masto, Catherine</option>
                                                    <option value="Sen. D" amato,="" alfonse'="">Sen. D'Amato, Alfonse</option>
                                                    <option value="Rep. Danner, Pat">Rep. Danner, Pat</option>
                                                    <option value="Sen. Daschle, Thomas A.">Sen. Daschle, Thomas A.</option>
                                                    <option value="Rep. Davis, Danny K.">Rep. Davis, Danny K.</option>
                                                    <option value="Rep. Davis, Jim">Rep. Davis, Jim</option>
                                                    <option value="Rep. Davis, Tom">Rep. Davis, Tom</option>
                                                    <option value="Rep. Deal, Nathan">Rep. Deal, Nathan</option>
                                                    <option value="Rep. DeFazio, Peter A.">Rep. DeFazio, Peter A.</option>
                                                    <option value="Rep. DeGette, Diana">Rep. DeGette, Diana</option>
                                                    <option value="Rep. Delahunt, William D.">Rep. Delahunt, William D.</option>
                                                    <option value="Rep. DeLauro, Rosa L.">Rep. DeLauro, Rosa L.</option>
                                                    <option value="Rep. DeLay, Tom">Rep. DeLay, Tom</option>
                                                    <option value="Rep. Dellums, Ronald V.">Rep. Dellums, Ronald V.</option>
                                                    <option value="Rep. Deutsch, Peter">Rep. Deutsch, Peter</option>
                                                    <option value="Sen. DeWine, Mike">Sen. DeWine, Mike</option>
                                                    <option value="Rep. Diaz-Balart, Lincoln">Rep. Diaz-Balart, Lincoln</option>
                                                    <option value="Rep. Dickey, Jay">Rep. Dickey, Jay</option>
                                                    <option value="Rep. Dicks, Norman D.">Rep. Dicks, Norman D.</option>
                                                    <option value="Rep. Dingell, John D.">Rep. Dingell, John D.</option>
                                                    <option value="Rep. Dixon, Julian C.">Rep. Dixon, Julian C.</option>
                                                    <option value="Sen. Dodd, Christopher J.">Sen. Dodd, Christopher J.</option>
                                                    <option value="Rep. Doggett, Lloyd">Rep. Doggett, Lloyd</option>
                                                    <option value="Sen. Domenici, Pete V.">Sen. Domenici, Pete V.</option>
                                                    <option value="Rep. Dooley, Calvin M.">Rep. Dooley, Calvin M.</option>
                                                    <option value="Rep. Doolittle, John T.">Rep. Doolittle, John T.</option>
                                                    <option value="Sen. Dorgan, Byron L.">Sen. Dorgan, Byron L.</option>
                                                    <option value="Rep. Doyle, Michael F.">Rep. Doyle, Michael F.</option>
                                                    <option value="Rep. Dreier, David">Rep. Dreier, David</option>
                                                    <option value="Rep. Duncan, John J., Jr.">Rep. Duncan, John J., Jr.</option>
                                                    <option value="Rep. Dunn, Jennifer">Rep. Dunn, Jennifer</option>
                                                    <option value="Sen. Durbin, Richard J.">Sen. Durbin, Richard J.</option>
                                                    <option value="Sen. DeMint, Jim">Sen. DeMint, Jim</option>
                                                    <option value="Sen. Dayton, Mark">Sen. Dayton, Mark</option>
                                                    <option value="Rep. Davis, Jo Ann">Rep. Davis, Jo Ann</option>
                                                    <option value="Rep. Davis, Susan A.">Rep. Davis, Susan A.</option>
                                                    <option value="Rep. Davis, Lincoln">Rep. Davis, Lincoln</option>
                                                    <option value="Rep. Diaz-Balart, Mario">Rep. Diaz-Balart, Mario</option>
                                                    <option value="Sen. Dole, Elizabeth">Sen. Dole, Elizabeth</option>
                                                    <option value="Rep. Davis, Artur">Rep. Davis, Artur</option>
                                                    <option value="Rep. Davis, Geoff">Rep. Davis, Geoff</option>
                                                    <option value="Rep. Dent, Charles W.">Rep. Dent, Charles W.</option>
                                                    <option value="Rep. Drake, Thelma D.">Rep. Drake, Thelma D.</option>
                                                    <option value="Rep. Davis, David">Rep. Davis, David</option>
                                                    <option value="Sen. Donnelly, Joe">Sen. Donnelly, Joe</option>
                                                    <option value="Rep. Dahlkemper, Kathleen A.">Rep. Dahlkemper, Kathleen A.</option>
                                                    <option value="Rep. Driehaus, Steve">Rep. Driehaus, Steve</option>
                                                    <option value="Rep. Deutch, Theodore E.">Rep. Deutch, Theodore E.</option>
                                                    <option value="Rep. Djou, Charles K.">Rep. Djou, Charles K.</option>
                                                    <option value="Rep. Denham, Jeff">Rep. Denham, Jeff</option>
                                                    <option value="Rep. Dold, Robert J.">Rep. Dold, Robert J.</option>
                                                    <option value="Rep. Duffy, Sean P.">Rep. Duffy, Sean P.</option>
                                                    <option value="Rep. Duncan, Jeff">Rep. Duncan, Jeff</option>
                                                    <option value="Rep. DesJarlais, Scott">Rep. DesJarlais, Scott</option>
                                                    <option value="Rep. DelBene, Suzan K.">Rep. DelBene, Suzan K.</option>
                                                    <option value="Sen. Daines, Steve">Sen. Daines, Steve</option>
                                                    <option value="Rep. Davis, Rodney">Rep. Davis, Rodney</option>
                                                    <option value="Rep. Delaney, John K.">Rep. Delaney, John K.</option>
                                                    <option value="Rep. DeSantis, Ron">Rep. DeSantis, Ron</option>
                                                    <option value="Sen. Duckworth, Tammy">Sen. Duckworth, Tammy</option>
                                                    <option value="Rep. DeSaulnier, Mark">Rep. DeSaulnier, Mark</option>
                                                    <option value="Rep. Dingell, Debbie">Rep. Dingell, Debbie</option>
                                                    <option value="Rep. Donovan, Daniel M., Jr.">Rep. Donovan, Daniel M., Jr.</option>
                                                    <option value="Rep. Davidson, Warren">Rep. Davidson, Warren</option>
                                                    <option value="Rep. Demings, Val Butler">Rep. Demings, Val Butler</option>
                                                    <option value="Rep. Dunn, Neal P.">Rep. Dunn, Neal P.</option>
                                                    <option value="Rep. Edwards, Chet">Rep. Edwards, Chet</option>
                                                    <option value="Rep. Ehlers, Vernon J.">Rep. Ehlers, Vernon J.</option>
                                                    <option value="Rep. Ehrlich, Robert L., Jr.">Rep. Ehrlich, Robert L., Jr.</option>
                                                    <option value="Rep. Emerson, Jo Ann">Rep. Emerson, Jo Ann</option>
                                                    <option value="Rep. Engel, Eliot L.">Rep. Engel, Eliot L.</option>
                                                    <option value="Rep. English, Phil">Rep. English, Phil</option>
                                                    <option value="Sen. Ensign, John">Sen. Ensign, John</option>
                                                    <option value="Rep. Eshoo, Anna G.">Rep. Eshoo, Anna G.</option>
                                                    <option value="Rep. Etheridge, Bob">Rep. Etheridge, Bob</option>
                                                    <option value="Rep. Evans, Lane">Rep. Evans, Lane</option>
                                                    <option value="Rep. Everett, Terry">Rep. Everett, Terry</option>
                                                    <option value="Rep. Ewing, Thomas W.">Rep. Ewing, Thomas W.</option>
                                                    <option value="Sen. Enzi, Michael B.">Sen. Enzi, Michael B.</option>
                                                    <option value="Sen. Edwards, John">Sen. Edwards, John</option>
                                                    <option value="Rep. Emanuel, Rahm">Rep. Emanuel, Rahm</option>
                                                    <option value="Rep. Ellison, Keith">Rep. Ellison, Keith</option>
                                                    <option value="Rep. Ellsworth, Brad">Rep. Ellsworth, Brad</option>
                                                    <option value="Rep. Edwards, Donna F.">Rep. Edwards, Donna F.</option>
                                                    <option value="Rep. Ellmers, Renee L.">Rep. Ellmers, Renee L.</option>
                                                    <option value="Rep. Enyart, William L.">Rep. Enyart, William L.</option>
                                                    <option value="Rep. Esty, Elizabeth H.">Rep. Esty, Elizabeth H.</option>
                                                    <option value="Rep. Emmer, Tom">Rep. Emmer, Tom</option>
                                                    <option value="Sen. Ernst, Joni">Sen. Ernst, Joni</option>
                                                    <option value="Rep. Evans, Dwight">Rep. Evans, Dwight</option>
                                                    <option value="Rep. Espaillat, Adriano">Rep. Espaillat, Adriano</option>
                                                    <option value="Rep. Estes, Ron">Rep. Estes, Ron</option>
                                                    <option value="Rep. Faleomavaega, Eni F. H.">Rep. Faleomavaega, Eni F. H.</option>
                                                    <option value="Rep. Farr, Sam">Rep. Farr, Sam</option>
                                                    <option value="Rep. Fattah, Chaka">Rep. Fattah, Chaka</option>
                                                    <option value="Rep. Fawell, Harris W.">Rep. Fawell, Harris W.</option>
                                                    <option value="Rep. Fazio, Vic">Rep. Fazio, Vic</option>
                                                    <option value="Sen. Feingold, Russell D.">Sen. Feingold, Russell D.</option>
                                                    <option value="Sen. Feinstein, Dianne">Sen. Feinstein, Dianne</option>
                                                    <option value="Rep. Filner, Bob">Rep. Filner, Bob</option>
                                                    <option value="Rep. Flake, Floyd H.">Rep. Flake, Floyd H.</option>
                                                    <option value="Rep. Foglietta, Thomas M.">Rep. Foglietta, Thomas M.</option>
                                                    <option value="Rep. Foley, Mark">Rep. Foley, Mark</option>
                                                    <option value="Rep. Forbes, Michael P.">Rep. Forbes, Michael P.</option>
                                                    <option value="Rep. Ford, Harold E., Jr.">Rep. Ford, Harold E., Jr.</option>
                                                    <option value="Sen. Ford, Wendell H.">Sen. Ford, Wendell H.</option>
                                                    <option value="Rep. Fowler, Tillie">Rep. Fowler, Tillie</option>
                                                    <option value="Rep. Fox, Jon D.">Rep. Fox, Jon D.</option>
                                                    <option value="Rep. Frank, Barney">Rep. Frank, Barney</option>
                                                    <option value="Rep. Franks, Bob">Rep. Franks, Bob</option>
                                                    <option value="Rep. Frelinghuysen, Rodney P.">Rep. Frelinghuysen, Rodney P.</option>
                                                    <option value="Rep. Frost, Martin">Rep. Frost, Martin</option>
                                                    <option value="Rep. Furse, Elizabeth">Rep. Furse, Elizabeth</option>
                                                    <option value="Sen. Faircloth, Lauch">Sen. Faircloth, Lauch</option>
                                                    <option value="Sen. Frist, William H.">Sen. Frist, William H.</option>
                                                    <option value="Rep. Fossella, Vito">Rep. Fossella, Vito</option>
                                                    <option value="Rep. Fletcher, Ernie">Rep. Fletcher, Ernie</option>
                                                    <option value="Sen. Fitzgerald, Peter">Sen. Fitzgerald, Peter</option>
                                                    <option value="Rep. Ferguson, Mike">Rep. Ferguson, Mike</option>
                                                    <option value="Sen. Flake, Jeff">Sen. Flake, Jeff</option>
                                                    <option value="Rep. Forbes, J. Randy">Rep. Forbes, J. Randy</option>
                                                    <option value="Rep. Feeney, Tom">Rep. Feeney, Tom</option>
                                                    <option value="Rep. Franks, Trent">Rep. Franks, Trent</option>
                                                    <option value="Rep. Fortenberry, Jeff">Rep. Fortenberry, Jeff</option>
                                                    <option value="Rep. Foxx, Virginia">Rep. Foxx, Virginia</option>
                                                    <option value="Rep. Fitzpatrick, Michael G.">Rep. Fitzpatrick, Michael G.</option>
                                                    <option value="Rep. Fortuno, Luis G.">Rep. Fortuno, Luis G.</option>
                                                    <option value="Rep. Fallin, Mary">Rep. Fallin, Mary</option>
                                                    <option value="Rep. Foster, Bill">Rep. Foster, Bill</option>
                                                    <option value="Rep. Fudge, Marcia L.">Rep. Fudge, Marcia L.</option>
                                                    <option value="Rep. Fleming, John">Rep. Fleming, John</option>
                                                    <option value="Sen. Franken, Al">Sen. Franken, Al</option>
                                                    <option value="Rep. Fincher, Stephen Lee">Rep. Fincher, Stephen Lee</option>
                                                    <option value="Rep. Fleischmann, Charles J. &quot;Chuck&quot;">Rep. Fleischmann, Charles J. "Chuck"</option>
                                                    <option value="Rep. Farenthold, Blake">Rep. Farenthold, Blake</option>
                                                    <option value="Rep. Flores, Bill">Rep. Flores, Bill</option>
                                                    <option value="Rep. Frankel, Lois">Rep. Frankel, Lois</option>
                                                    <option value="Sen. Fischer, Deb">Sen. Fischer, Deb</option>
                                                    <option value="Rep. Faso, John J.">Rep. Faso, John J.</option>
                                                    <option value="Rep. Ferguson, A. Drew, IV">Rep. Ferguson, A. Drew, IV</option>
                                                    <option value="Rep. Fitzpatrick, Brian K.">Rep. Fitzpatrick, Brian K.</option>
                                                    <option value="Rep. Gallegly, Elton">Rep. Gallegly, Elton</option>
                                                    <option value="Rep. Ganske, Greg">Rep. Ganske, Greg</option>
                                                    <option value="Rep. Gejdenson, Sam">Rep. Gejdenson, Sam</option>
                                                    <option value="Rep. Gekas, George W.">Rep. Gekas, George W.</option>
                                                    <option value="Rep. Gephardt, Richard A.">Rep. Gephardt, Richard A.</option>
                                                    <option value="Rep. Gibbons, Jim">Rep. Gibbons, Jim</option>
                                                    <option value="Rep. Gilchrest, Wayne T.">Rep. Gilchrest, Wayne T.</option>
                                                    <option value="Rep. Gillmor, Paul E.">Rep. Gillmor, Paul E.</option>
                                                    <option value="Rep. Gilman, Benjamin A.">Rep. Gilman, Benjamin A.</option>
                                                    <option value="Rep. Gingrich, Newt">Rep. Gingrich, Newt</option>
                                                    <option value="Sen. Glenn, John H., Jr.">Sen. Glenn, John H., Jr.</option>
                                                    <option value="Rep. Gonzalez, Henry B.">Rep. Gonzalez, Henry B.</option>
                                                    <option value="Rep. Goode, Virgil H., Jr.">Rep. Goode, Virgil H., Jr.</option>
                                                    <option value="Rep. Goodlatte, Bob">Rep. Goodlatte, Bob</option>
                                                    <option value="Rep. Goodling, William F.">Rep. Goodling, William F.</option>
                                                    <option value="Rep. Gordon, Bart">Rep. Gordon, Bart</option>
                                                    <option value="Sen. Gorton, Slade">Sen. Gorton, Slade</option>
                                                    <option value="Rep. Goss, Porter J.">Rep. Goss, Porter J.</option>
                                                    <option value="Sen. Graham, Bob">Sen. Graham, Bob</option>
                                                    <option value="Sen. Graham, Lindsey">Sen. Graham, Lindsey</option>
                                                    <option value="Sen. Gramm, Phil">Sen. Gramm, Phil</option>
                                                    <option value="Sen. Grams, Rod">Sen. Grams, Rod</option>
                                                    <option value="Rep. Granger, Kay">Rep. Granger, Kay</option>
                                                    <option value="Sen. Grassley, Chuck">Sen. Grassley, Chuck</option>
                                                    <option value="Rep. Green, Gene">Rep. Green, Gene</option>
                                                    <option value="Rep. Greenwood, James C.">Rep. Greenwood, James C.</option>
                                                    <option value="Sen. Gregg, Judd">Sen. Gregg, Judd</option>
                                                    <option value="Rep. Gutierrez, Luis V.">Rep. Gutierrez, Luis V.</option>
                                                    <option value="Rep. Gutknecht, Gil">Rep. Gutknecht, Gil</option>
                                                    <option value="Rep. Gonzalez, Charles A.">Rep. Gonzalez, Charles A.</option>
                                                    <option value="Rep. Green, Mark">Rep. Green, Mark</option>
                                                    <option value="Rep. Graves, Sam">Rep. Graves, Sam</option>
                                                    <option value="Rep. Grucci, Felix J., Jr.">Rep. Grucci, Felix J., Jr.</option>
                                                    <option value="Rep. Garrett, Scott">Rep. Garrett, Scott</option>
                                                    <option value="Rep. Gerlach, Jim">Rep. Gerlach, Jim</option>
                                                    <option value="Rep. Gingrey, Phil">Rep. Gingrey, Phil</option>
                                                    <option value="Rep. Grijalva, Raul M.">Rep. Grijalva, Raul M.</option>
                                                    <option value="Rep. Gohmert, Louie">Rep. Gohmert, Louie</option>
                                                    <option value="Rep. Green, Al">Rep. Green, Al</option>
                                                    <option value="Rep. Giffords, Gabrielle">Rep. Giffords, Gabrielle</option>
                                                    <option value="Sen. Gillibrand, Kirsten E.">Sen. Gillibrand, Kirsten E.</option>
                                                    <option value="Rep. Grayson, Alan">Rep. Grayson, Alan</option>
                                                    <option value="Rep. Griffith, Parker">Rep. Griffith, Parker</option>
                                                    <option value="Rep. Guthrie, Brett">Rep. Guthrie, Brett</option>
                                                    <option value="Rep. Garamendi, John">Rep. Garamendi, John</option>
                                                    <option value="Rep. Graves, Tom">Rep. Graves, Tom</option>
                                                    <option value="Sen. Goodwin, Carte Patrick">Sen. Goodwin, Carte Patrick</option>
                                                    <option value="Sen. Gardner, Cory">Sen. Gardner, Cory</option>
                                                    <option value="Rep. Gibbs, Bob">Rep. Gibbs, Bob</option>
                                                    <option value="Rep. Gibson, Christopher P.">Rep. Gibson, Christopher P.</option>
                                                    <option value="Rep. Gosar, Paul A.">Rep. Gosar, Paul A.</option>
                                                    <option value="Rep. Gowdy, Trey">Rep. Gowdy, Trey</option>
                                                    <option value="Rep. Griffin, Tim">Rep. Griffin, Tim</option>
                                                    <option value="Rep. Griffith, H. Morgan">Rep. Griffith, H. Morgan</option>
                                                    <option value="Rep. Grimm, Michael G.">Rep. Grimm, Michael G.</option>
                                                    <option value="Rep. Guinta, Frank C.">Rep. Guinta, Frank C.</option>
                                                    <option value="Rep. Gabbard, Tulsi">Rep. Gabbard, Tulsi</option>
                                                    <option value="Rep. Gallego, Pete P.">Rep. Gallego, Pete P.</option>
                                                    <option value="Rep. Garcia, Joe">Rep. Garcia, Joe</option>
                                                    <option value="Rep. Gallego, Ruben">Rep. Gallego, Ruben</option>
                                                    <option value="Rep. Graham, Gwen">Rep. Graham, Gwen</option>
                                                    <option value="Rep. Grothman, Glenn">Rep. Grothman, Glenn</option>
                                                    <option value="Rep. Graves, Garret">Rep. Graves, Garret</option>
                                                    <option value="Rep. Gaetz, Matt">Rep. Gaetz, Matt</option>
                                                    <option value="Rep. Gallagher, Mike">Rep. Gallagher, Mike</option>
                                                    <option value="Rep. Garrett, Thomas A., Jr.">Rep. Garrett, Thomas A., Jr.</option>
                                                    <option value="Rep. Gonzalez, Vicente">Rep. Gonzalez, Vicente</option>
                                                    <option value="Rep. Gonzalez-Colon, Jenniffer">Rep. Gonzalez-Colon, Jenniffer</option>
                                                    <option value="Rep. Gottheimer, Josh">Rep. Gottheimer, Josh</option>
                                                    <option value="Rep. Gianforte, Greg">Rep. Gianforte, Greg</option>
                                                    <option value="Rep. Gomez, Jimmy">Rep. Gomez, Jimmy</option>
                                                    <option value="Rep. Hall, Ralph M.">Rep. Hall, Ralph M.</option>
                                                    <option value="Rep. Hall, Tony P.">Rep. Hall, Tony P.</option>
                                                    <option value="Rep. Hamilton, Lee H.">Rep. Hamilton, Lee H.</option>
                                                    <option value="Rep. Hansen, James V.">Rep. Hansen, James V.</option>
                                                    <option value="Sen. Harkin, Tom">Sen. Harkin, Tom</option>
                                                    <option value="Rep. Harman, Jane">Rep. Harman, Jane</option>
                                                    <option value="Rep. Hastert, J. Dennis">Rep. Hastert, J. Dennis</option>
                                                    <option value="Rep. Hastings, Alcee L.">Rep. Hastings, Alcee L.</option>
                                                    <option value="Rep. Hastings, Doc">Rep. Hastings, Doc</option>
                                                    <option value="Sen. Hatch, Orrin G.">Sen. Hatch, Orrin G.</option>
                                                    <option value="Rep. Hayworth, J. D.">Rep. Hayworth, J. D.</option>
                                                    <option value="Rep. Hefley, Joel">Rep. Hefley, Joel</option>
                                                    <option value="Rep. Hefner, W. G. (Bill)">Rep. Hefner, W. G. (Bill)</option>
                                                    <option value="Sen. Helms, Jesse">Sen. Helms, Jesse</option>
                                                    <option value="Rep. Herger, Wally">Rep. Herger, Wally</option>
                                                    <option value="Rep. Hill, Rick">Rep. Hill, Rick</option>
                                                    <option value="Rep. Hilleary, Van">Rep. Hilleary, Van</option>
                                                    <option value="Rep. Hilliard, Earl F.">Rep. Hilliard, Earl F.</option>
                                                    <option value="Rep. Hinchey, Maurice D.">Rep. Hinchey, Maurice D.</option>
                                                    <option value="Rep. Hinojosa, Ruben">Rep. Hinojosa, Ruben</option>
                                                    <option value="Rep. Hobson, David L.">Rep. Hobson, David L.</option>
                                                    <option value="Rep. Hoekstra, Peter">Rep. Hoekstra, Peter</option>
                                                    <option value="Rep. Holden, Tim">Rep. Holden, Tim</option>
                                                    <option value="Sen. Hollings, Ernest F.">Sen. Hollings, Ernest F.</option>
                                                    <option value="Rep. Hooley, Darlene">Rep. Hooley, Darlene</option>
                                                    <option value="Rep. Horn, Stephen">Rep. Horn, Stephen</option>
                                                    <option value="Rep. Hostettler, John N.">Rep. Hostettler, John N.</option>
                                                    <option value="Rep. Houghton, Amo">Rep. Houghton, Amo</option>
                                                    <option value="Rep. Hoyer, Steny H.">Rep. Hoyer, Steny H.</option>
                                                    <option value="Rep. Hulshof, Kenny C.">Rep. Hulshof, Kenny C.</option>
                                                    <option value="Rep. Hunter, Duncan">Rep. Hunter, Duncan</option>
                                                    <option value="Rep. Hutchinson, Asa">Rep. Hutchinson, Asa</option>
                                                    <option value="Sen. Hutchinson, Tim">Sen. Hutchinson, Tim</option>
                                                    <option value="Sen. Hutchison, Kay Bailey">Sen. Hutchison, Kay Bailey</option>
                                                    <option value="Rep. Hyde, Henry J.">Rep. Hyde, Henry J.</option>
                                                    <option value="Sen. Hagel, Chuck">Sen. Hagel, Chuck</option>
                                                    <option value="Rep. Hayes, Robin">Rep. Hayes, Robin</option>
                                                    <option value="Rep. Hill, Baron P.">Rep. Hill, Baron P.</option>
                                                    <option value="Rep. Hoeffel, Joseph M.">Rep. Hoeffel, Joseph M.</option>
                                                    <option value="Rep. Holt, Rush">Rep. Holt, Rush</option>
                                                    <option value="Rep. Hart, Melissa A.">Rep. Hart, Melissa A.</option>
                                                    <option value="Rep. Honda, Michael M.">Rep. Honda, Michael M.</option>
                                                    <option value="Rep. Harris, Katherine">Rep. Harris, Katherine</option>
                                                    <option value="Rep. Hensarling, Jeb">Rep. Hensarling, Jeb</option>
                                                    <option value="Rep. Herseth Sandlin, Stephanie">Rep. Herseth Sandlin, Stephanie</option>
                                                    <option value="Rep. Higgins, Brian">Rep. Higgins, Brian</option>
                                                    <option value="Rep. Hall, John J.">Rep. Hall, John J.</option>
                                                    <option value="Rep. Hare, Phil">Rep. Hare, Phil</option>
                                                    <option value="Sen. Heller, Dean">Sen. Heller, Dean</option>
                                                    <option value="Sen. Hirono, Mazie K.">Sen. Hirono, Mazie K.</option>
                                                    <option value="Rep. Hodes, Paul W.">Rep. Hodes, Paul W.</option>
                                                    <option value="Rep. Halvorson, Deborah L.">Rep. Halvorson, Deborah L.</option>
                                                    <option value="Rep. Harper, Gregg">Rep. Harper, Gregg</option>
                                                    <option value="Sen. Heinrich, Martin">Sen. Heinrich, Martin</option>
                                                    <option value="Rep. Himes, James A.">Rep. Himes, James A.</option>
                                                    <option value="Rep. Hunter, Duncan D.">Rep. Hunter, Duncan D.</option>
                                                    <option value="Sen. Hagan, Kay">Sen. Hagan, Kay</option>
                                                    <option value="Rep. Hanabusa, Colleen">Rep. Hanabusa, Colleen</option>
                                                    <option value="Rep. Hanna, Richard L.">Rep. Hanna, Richard L.</option>
                                                    <option value="Rep. Harris, Andy">Rep. Harris, Andy</option>
                                                    <option value="Rep. Hartzler, Vicky">Rep. Hartzler, Vicky</option>
                                                    <option value="Rep. Hayworth, Nan A. S.">Rep. Hayworth, Nan A. S.</option>
                                                    <option value="Rep. Heck, Joseph J.">Rep. Heck, Joseph J.</option>
                                                    <option value="Rep. Herrera Beutler, Jaime">Rep. Herrera Beutler, Jaime</option>
                                                    <option value="Rep. Huelskamp, Tim">Rep. Huelskamp, Tim</option>
                                                    <option value="Rep. Huizenga, Bill">Rep. Huizenga, Bill</option>
                                                    <option value="Rep. Hultgren, Randy">Rep. Hultgren, Randy</option>
                                                    <option value="Rep. Hurt, Robert">Rep. Hurt, Robert</option>
                                                    <option value="Sen. Hoeven, John">Sen. Hoeven, John</option>
                                                    <option value="Rep. Hochul, Kathleen C.">Rep. Hochul, Kathleen C.</option>
                                                    <option value="Rep. Hahn, Janice">Rep. Hahn, Janice</option>
                                                    <option value="Rep. Heck, Denny">Rep. Heck, Denny</option>
                                                    <option value="Rep. Holding, George">Rep. Holding, George</option>
                                                    <option value="Rep. Horsford, Steven A.">Rep. Horsford, Steven A.</option>
                                                    <option value="Rep. Hudson, Richard">Rep. Hudson, Richard</option>
                                                    <option value="Rep. Huffman, Jared">Rep. Huffman, Jared</option>
                                                    <option value="Sen. Heitkamp, Heidi">Sen. Heitkamp, Heidi</option>
                                                    <option value="Rep. Hardy, Cresent">Rep. Hardy, Cresent</option>
                                                    <option value="Rep. Hice, Jody B.">Rep. Hice, Jody B.</option>
                                                    <option value="Rep. Hill, J. French">Rep. Hill, J. French</option>
                                                    <option value="Rep. Hurd, Will">Rep. Hurd, Will</option>
                                                    <option value="Rep. Hollingsworth, Trey">Rep. Hollingsworth, Trey</option>
                                                    <option value="Sen. Harris, Kamala D.">Sen. Harris, Kamala D.</option>
                                                    <option value="Sen. Hassan, Margaret Wood">Sen. Hassan, Margaret Wood</option>
                                                    <option value="Rep. Higgins, Clay">Rep. Higgins, Clay</option>
                                                    <option value="Rep. Handel, Karen C.">Rep. Handel, Karen C.</option>
                                                    <option value="Rep. Inglis, Bob">Rep. Inglis, Bob</option>
                                                    <option value="Sen. Inhofe, James M.">Sen. Inhofe, James M.</option>
                                                    <option value="Sen. Inouye, Daniel K.">Sen. Inouye, Daniel K.</option>
                                                    <option value="Rep. Inslee, Jay">Rep. Inslee, Jay</option>
                                                    <option value="Rep. Istook, Ernest J., Jr.">Rep. Istook, Ernest J., Jr.</option>
                                                    <option value="Sen. Isakson, Johnny">Sen. Isakson, Johnny</option>
                                                    <option value="Rep. Issa, Darrell E.">Rep. Issa, Darrell E.</option>
                                                    <option value="Rep. Israel, Steve">Rep. Israel, Steve</option>
                                                    <option value="Rep. Jackson Lee, Sheila">Rep. Jackson Lee, Sheila</option>
                                                    <option value="Rep. Jefferson, William J.">Rep. Jefferson, William J.</option>
                                                    <option value="Sen. Jeffords, James M.">Sen. Jeffords, James M.</option>
                                                    <option value="Rep. Jenkins, William L.">Rep. Jenkins, William L.</option>
                                                    <option value="Rep. John, Christopher">Rep. John, Christopher</option>
                                                    <option value="Rep. Johnson, Eddie Bernice">Rep. Johnson, Eddie Bernice</option>
                                                    <option value="Rep. Johnson, Jay W.">Rep. Johnson, Jay W.</option>
                                                    <option value="Rep. Johnson, Nancy L.">Rep. Johnson, Nancy L.</option>
                                                    <option value="Rep. Johnson, Sam">Rep. Johnson, Sam</option>
                                                    <option value="Sen. Johnson, Tim">Sen. Johnson, Tim</option>
                                                    <option value="Rep. Jones, Walter B., Jr.">Rep. Jones, Walter B., Jr.</option>
                                                    <option value="Rep. Jackson, Jesse L., Jr.">Rep. Jackson, Jesse L., Jr.</option>
                                                    <option value="Rep. Jones, Stephanie Tubbs">Rep. Jones, Stephanie Tubbs</option>
                                                    <option value="Rep. Johnson, Timothy V.">Rep. Johnson, Timothy V.</option>
                                                    <option value="Rep. Janklow, William J.">Rep. Janklow, William J.</option>
                                                    <option value="Rep. Jindal, Bobby">Rep. Jindal, Bobby</option>
                                                    <option value="Rep. Johnson, Henry C. &quot;Hank,&quot; Jr.">Rep. Johnson, Henry C. "Hank," Jr.</option>
                                                    <option value="Rep. Jordan, Jim">Rep. Jordan, Jim</option>
                                                    <option value="Rep. Jenkins, Lynn">Rep. Jenkins, Lynn</option>
                                                    <option value="Sen. Johanns, Mike">Sen. Johanns, Mike</option>
                                                    <option value="Rep. Johnson, Bill">Rep. Johnson, Bill</option>
                                                    <option value="Sen. Johnson, Ron">Sen. Johnson, Ron</option>
                                                    <option value="Rep. Jeffries, Hakeem S.">Rep. Jeffries, Hakeem S.</option>
                                                    <option value="Rep. Joyce, David P.">Rep. Joyce, David P.</option>
                                                    <option value="Rep. Jolly, David">Rep. Jolly, David</option>
                                                    <option value="Rep. Jenkins, Evan H.">Rep. Jenkins, Evan H.</option>
                                                    <option value="Rep. Jayapal, Pramila">Rep. Jayapal, Pramila</option>
                                                    <option value="Rep. Johnson, Mike">Rep. Johnson, Mike</option>
                                                    <option value="Rep. Kanjorski, Paul E.">Rep. Kanjorski, Paul E.</option>
                                                    <option value="Rep. Kaptur, Marcy">Rep. Kaptur, Marcy</option>
                                                    <option value="Rep. Kasich, John R.">Rep. Kasich, John R.</option>
                                                    <option value="Rep. Kelly, Sue W.">Rep. Kelly, Sue W.</option>
                                                    <option value="Sen. Kempthorne, Dirk">Sen. Kempthorne, Dirk</option>
                                                    <option value="Sen. Kennedy, Edward M.">Sen. Kennedy, Edward M.</option>
                                                    <option value="Rep. Kennedy, Joseph P., II">Rep. Kennedy, Joseph P., II</option>
                                                    <option value="Rep. Kennedy, Patrick J.">Rep. Kennedy, Patrick J.</option>
                                                    <option value="Rep. Kennelly, Barbara B.">Rep. Kennelly, Barbara B.</option>
                                                    <option value="Sen. Kerrey, J. Robert">Sen. Kerrey, J. Robert</option>
                                                    <option value="Sen. Kerry, John F.">Sen. Kerry, John F.</option>
                                                    <option value="Rep. Kildee, Dale E.">Rep. Kildee, Dale E.</option>
                                                    <option value="Rep. Kilpatrick, Carolyn C.">Rep. Kilpatrick, Carolyn C.</option>
                                                    <option value="Rep. Kim, Jay">Rep. Kim, Jay</option>
                                                    <option value="Rep. Kind, Ron">Rep. Kind, Ron</option>
                                                    <option value="Rep. King, Peter T.">Rep. King, Peter T.</option>
                                                    <option value="Rep. Kingston, Jack">Rep. Kingston, Jack</option>
                                                    <option value="Rep. Kleczka, Gerald D.">Rep. Kleczka, Gerald D.</option>
                                                    <option value="Rep. Klink, Ron">Rep. Klink, Ron</option>
                                                    <option value="Rep. Klug, Scott L.">Rep. Klug, Scott L.</option>
                                                    <option value="Rep. Knollenberg, Joe">Rep. Knollenberg, Joe</option>
                                                    <option value="Sen. Kohl, Herb">Sen. Kohl, Herb</option>
                                                    <option value="Rep. Kolbe, Jim">Rep. Kolbe, Jim</option>
                                                    <option value="Rep. Kucinich, Dennis J.">Rep. Kucinich, Dennis J.</option>
                                                    <option value="Sen. Kyl, Jon">Sen. Kyl, Jon</option>
                                                    <option value="Rep. Kuykendall, Steven T.">Rep. Kuykendall, Steven T.</option>
                                                    <option value="Rep. Kennedy, Mark R.">Rep. Kennedy, Mark R.</option>
                                                    <option value="Rep. Kerns, Brian D.">Rep. Kerns, Brian D.</option>
                                                    <option value="Sen. Kirk, Mark Steven">Sen. Kirk, Mark Steven</option>
                                                    <option value="Rep. Keller, Ric">Rep. Keller, Ric</option>
                                                    <option value="Rep. King, Steve">Rep. King, Steve</option>
                                                    <option value="Rep. Kline, John">Rep. Kline, John</option>
                                                    <option value="Rep. Kuhl, John R. &quot;Randy&quot;, Jr.">Rep. Kuhl, John R. "Randy", Jr.</option>
                                                    <option value="Rep. Kagen, Steve">Rep. Kagen, Steve</option>
                                                    <option value="Rep. Klein, Ron">Rep. Klein, Ron</option>
                                                    <option value="Sen. Klobuchar, Amy">Sen. Klobuchar, Amy</option>
                                                    <option value="Rep. Kirkpatrick, Ann">Rep. Kirkpatrick, Ann</option>
                                                    <option value="Rep. Kissell, Larry">Rep. Kissell, Larry</option>
                                                    <option value="Rep. Kosmas, Suzanne M.">Rep. Kosmas, Suzanne M.</option>
                                                    <option value="Rep. Kratovil, Frank, Jr.">Rep. Kratovil, Frank, Jr.</option>
                                                    <option value="Rep. Kilroy, Mary Jo">Rep. Kilroy, Mary Jo</option>
                                                    <option value="Sen. Kaufman, Edward E.">Sen. Kaufman, Edward E.</option>
                                                    <option value="Sen. Kirk, Paul Grattan, Jr.">Sen. Kirk, Paul Grattan, Jr.</option>
                                                    <option value="Rep. Keating, William R.">Rep. Keating, William R.</option>
                                                    <option value="Rep. Kelly, Mike">Rep. Kelly, Mike</option>
                                                    <option value="Rep. Kinzinger, Adam">Rep. Kinzinger, Adam</option>
                                                    <option value="Rep. Kennedy, Joseph P., III">Rep. Kennedy, Joseph P., III</option>
                                                    <option value="Rep. Kildee, Daniel T.">Rep. Kildee, Daniel T.</option>
                                                    <option value="Rep. Kilmer, Derek">Rep. Kilmer, Derek</option>
                                                    <option value="Rep. Kuster, Ann M.">Rep. Kuster, Ann M.</option>
                                                    <option value="Sen. King, Angus S., Jr.">Sen. King, Angus S., Jr.</option>
                                                    <option value="Sen. Kaine, Tim">Sen. Kaine, Tim</option>
                                                    <option value="Rep. Kelly, Robin L.">Rep. Kelly, Robin L.</option>
                                                    <option value="Rep. Katko, John">Rep. Katko, John</option>
                                                    <option value="Rep. Knight, Stephen">Rep. Knight, Stephen</option>
                                                    <option value="Rep. Kelly, Trent">Rep. Kelly, Trent</option>
                                                    <option value="Rep. Khanna, Ro">Rep. Khanna, Ro</option>
                                                    <option value="Rep. Kihuen, Ruben J.">Rep. Kihuen, Ruben J.</option>
                                                    <option value="Rep. Krishnamoorthi, Raja">Rep. Krishnamoorthi, Raja</option>
                                                    <option value="Rep. Kustoff, David">Rep. Kustoff, David</option>
                                                    <option value="Sen. Kennedy, John">Sen. Kennedy, John</option>
                                                    <option value="Sen. Lambert, Blanche M.">Sen. Lambert, Blanche M.</option>
                                                    <option value="Rep. Lampson, Nick">Rep. Lampson, Nick</option>
                                                    <option value="Rep. Lantos, Tom">Rep. Lantos, Tom</option>
                                                    <option value="Rep. Largent, Steve">Rep. Largent, Steve</option>
                                                    <option value="Rep. Latham, Tom">Rep. Latham, Tom</option>
                                                    <option value="Sen. Lautenberg, Frank R.">Sen. Lautenberg, Frank R.</option>
                                                    <option value="Rep. Lazio, Rick">Rep. Lazio, Rick</option>
                                                    <option value="Rep. Leach, James A.">Rep. Leach, James A.</option>
                                                    <option value="Sen. Leahy, Patrick J.">Sen. Leahy, Patrick J.</option>
                                                    <option value="Sen. Levin, Carl">Sen. Levin, Carl</option>
                                                    <option value="Rep. Levin, Sander M.">Rep. Levin, Sander M.</option>
                                                    <option value="Rep. Lewis, Jerry">Rep. Lewis, Jerry</option>
                                                    <option value="Rep. Lewis, John">Rep. Lewis, John</option>
                                                    <option value="Rep. Lewis, Ron">Rep. Lewis, Ron</option>
                                                    <option value="Sen. Lieberman, Joseph I.">Sen. Lieberman, Joseph I.</option>
                                                    <option value="Rep. Linder, John">Rep. Linder, John</option>
                                                    <option value="Rep. Lipinski, William O.">Rep. Lipinski, William O.</option>
                                                    <option value="Rep. Livingston, Bob">Rep. Livingston, Bob</option>
                                                    <option value="Rep. Lofgren, Zoe">Rep. Lofgren, Zoe</option>
                                                    <option value="Sen. Lott, Trent">Sen. Lott, Trent</option>
                                                    <option value="Rep. Lowey, Nita M.">Rep. Lowey, Nita M.</option>
                                                    <option value="Rep. Lucas, Frank D.">Rep. Lucas, Frank D.</option>
                                                    <option value="Sen. Lugar, Richard G.">Sen. Lugar, Richard G.</option>
                                                    <option value="Rep. Lungren, Daniel E.">Rep. Lungren, Daniel E.</option>
                                                    <option value="Rep. Luther, Bill">Rep. Luther, Bill</option>
                                                    <option value="Sen. Landrieu, Mary L.">Sen. Landrieu, Mary L.</option>
                                                    <option value="Rep. Lee, Barbara">Rep. Lee, Barbara</option>
                                                    <option value="Rep. LaHood, Ray">Rep. LaHood, Ray</option>
                                                    <option value="Rep. LaTourette, Steven C.">Rep. LaTourette, Steven C.</option>
                                                    <option value="Rep. LoBiondo, Frank A.">Rep. LoBiondo, Frank A.</option>
                                                    <option value="Rep. LaFalce, John J.">Rep. LaFalce, John J.</option>
                                                    <option value="Rep. Larson, John B.">Rep. Larson, John B.</option>
                                                    <option value="Rep. Lucas, Ken">Rep. Lucas, Ken</option>
                                                    <option value="Rep. Langevin, James R.">Rep. Langevin, James R.</option>
                                                    <option value="Rep. Larsen, Rick">Rep. Larsen, Rick</option>
                                                    <option value="Rep. Lynch, Stephen F.">Rep. Lynch, Stephen F.</option>
                                                    <option value="Rep. Lipinski, Daniel">Rep. Lipinski, Daniel</option>
                                                    <option value="Rep. Lamborn, Doug">Rep. Lamborn, Doug</option>
                                                    <option value="Rep. Loebsack, David">Rep. Loebsack, David</option>
                                                    <option value="Rep. Latta, Robert E.">Rep. Latta, Robert E.</option>
                                                    <option value="Rep. Lance, Leonard">Rep. Lance, Leonard</option>
                                                    <option value="Rep. Lee, Christopher J.">Rep. Lee, Christopher J.</option>
                                                    <option value="Rep. Luetkemeyer, Blaine">Rep. Luetkemeyer, Blaine</option>
                                                    <option value="Rep. Lujan, Ben Ray">Rep. Lujan, Ben Ray</option>
                                                    <option value="Rep. Lummis, Cynthia M.">Rep. Lummis, Cynthia M.</option>
                                                    <option value="Sen. LeMieux, George S.">Sen. LeMieux, George S.</option>
                                                    <option value="Rep. Labrador, Raul R.">Rep. Labrador, Raul R.</option>
                                                    <option value="Rep. Landry, Jeffrey M.">Rep. Landry, Jeffrey M.</option>
                                                    <option value="Sen. Lankford, James">Sen. Lankford, James</option>
                                                    <option value="Rep. Long, Billy">Rep. Long, Billy</option>
                                                    <option value="Sen. Lee, Mike">Sen. Lee, Mike</option>
                                                    <option value="Rep. LaMalfa, Doug">Rep. LaMalfa, Doug</option>
                                                    <option value="Rep. Lowenthal, Alan S.">Rep. Lowenthal, Alan S.</option>
                                                    <option value="Rep. Lujan Grisham, Michelle">Rep. Lujan Grisham, Michelle</option>
                                                    <option value="Rep. Lawrence, Brenda L.">Rep. Lawrence, Brenda L.</option>
                                                    <option value="Rep. Lieu, Ted">Rep. Lieu, Ted</option>
                                                    <option value="Rep. Loudermilk, Barry">Rep. Loudermilk, Barry</option>
                                                    <option value="Rep. Love, Mia B.">Rep. Love, Mia B.</option>
                                                    <option value="Rep. LaHood, Darin">Rep. LaHood, Darin</option>
                                                    <option value="Rep. Lawson, Al, Jr.">Rep. Lawson, Al, Jr.</option>
                                                    <option value="Rep. Lewis, Jason">Rep. Lewis, Jason</option>
                                                    <option value="Sen. Mack, Connie, III">Sen. Mack, Connie, III</option>
                                                    <option value="Rep. Maloney, Carolyn B.">Rep. Maloney, Carolyn B.</option>
                                                    <option value="Rep. Maloney, James H.">Rep. Maloney, James H.</option>
                                                    <option value="Rep. Manton, Thomas J.">Rep. Manton, Thomas J.</option>
                                                    <option value="Sen. Markey, Edward J.">Sen. Markey, Edward J.</option>
                                                    <option value="Rep. Martinez, Matthew G.">Rep. Martinez, Matthew G.</option>
                                                    <option value="Rep. Mascara, Frank">Rep. Mascara, Frank</option>
                                                    <option value="Rep. Matsui, Robert T.">Rep. Matsui, Robert T.</option>
                                                    <option value="Sen. McCain, John">Sen. McCain, John</option>
                                                    <option value="Rep. McCarthy, Carolyn">Rep. McCarthy, Carolyn</option>
                                                    <option value="Rep. McGovern, James P.">Rep. McGovern, James P.</option>
                                                    <option value="Rep. McCarthy, Karen">Rep. McCarthy, Karen</option>
                                                    <option value="Rep. McCollum, Bill">Rep. McCollum, Bill</option>
                                                    <option value="Sen. McConnell, Mitch">Sen. McConnell, Mitch</option>
                                                    <option value="Rep. McCrery, Jim">Rep. McCrery, Jim</option>
                                                    <option value="Rep. McDade, Joseph M.">Rep. McDade, Joseph M.</option>
                                                    <option value="Rep. McDermott, Jim">Rep. McDermott, Jim</option>
                                                    <option value="Rep. McHale, Paul">Rep. McHale, Paul</option>
                                                    <option value="Rep. McHugh, John M.">Rep. McHugh, John M.</option>
                                                    <option value="Rep. McInnis, Scott">Rep. McInnis, Scott</option>
                                                    <option value="Rep. McIntosh, David M.">Rep. McIntosh, David M.</option>
                                                    <option value="Rep. McIntyre, Mike">Rep. McIntyre, Mike</option>
                                                    <option value="Rep. McKeon, Howard P. &quot;Buck&quot;">Rep. McKeon, Howard P. "Buck"</option>
                                                    <option value="Rep. McKinney, Cynthia A.">Rep. McKinney, Cynthia A.</option>
                                                    <option value="Rep. McNulty, Michael R.">Rep. McNulty, Michael R.</option>
                                                    <option value="Rep. Meehan, Martin T.">Rep. Meehan, Martin T.</option>
                                                    <option value="Rep. Meek, Carrie P.">Rep. Meek, Carrie P.</option>
                                                    <option value="Sen. Menendez, Robert">Sen. Menendez, Robert</option>
                                                    <option value="Rep. Metcalf, Jack">Rep. Metcalf, Jack</option>
                                                    <option value="Rep. Mica, John L.">Rep. Mica, John L.</option>
                                                    <option value="Sen. Mikulski, Barbara A.">Sen. Mikulski, Barbara A.</option>
                                                    <option value="Rep. Millender-McDonald, Juanita">Rep. Millender-McDonald, Juanita</option>
                                                    <option value="Rep. Miller, Dan">Rep. Miller, Dan</option>
                                                    <option value="Rep. Miller, George">Rep. Miller, George</option>
                                                    <option value="Rep. Minge, David">Rep. Minge, David</option>
                                                    <option value="Rep. Mink, Patsy T.">Rep. Mink, Patsy T.</option>
                                                    <option value="Rep. Moakley, John Joseph">Rep. Moakley, John Joseph</option>
                                                    <option value="Rep. Molinari, Susan">Rep. Molinari, Susan</option>
                                                    <option value="Rep. Mollohan, Alan B.">Rep. Mollohan, Alan B.</option>
                                                    <option value="Rep. Moran, James P.">Rep. Moran, James P.</option>
                                                    <option value="Sen. Moran, Jerry">Sen. Moran, Jerry</option>
                                                    <option value="Rep. Morella, Constance A.">Rep. Morella, Constance A.</option>
                                                    <option value="Sen. Moseley-Braun, Carol">Sen. Moseley-Braun, Carol</option>
                                                    <option value="Sen. Moynihan, Daniel Patrick">Sen. Moynihan, Daniel Patrick</option>
                                                    <option value="Sen. Murkowski, Frank H.">Sen. Murkowski, Frank H.</option>
                                                    <option value="Sen. Murray, Patty">Sen. Murray, Patty</option>
                                                    <option value="Rep. Murtha, John P.">Rep. Murtha, John P.</option>
                                                    <option value="Rep. Myrick, Sue Wilkins">Rep. Myrick, Sue Wilkins</option>
                                                    <option value="Rep. Meeks, Gregory W.">Rep. Meeks, Gregory W.</option>
                                                    <option value="Rep. Manzullo, Donald A.">Rep. Manzullo, Donald A.</option>
                                                    <option value="Rep. Miller, Gary G.">Rep. Miller, Gary G.</option>
                                                    <option value="Rep. Moore, Dennis">Rep. Moore, Dennis</option>
                                                    <option value="Sen. Miller, Zell">Sen. Miller, Zell</option>
                                                    <option value="Rep. Matheson, Jim">Rep. Matheson, Jim</option>
                                                    <option value="Rep. McCollum, Betty">Rep. McCollum, Betty</option>
                                                    <option value="Rep. Miller, Jeff">Rep. Miller, Jeff</option>
                                                    <option value="Rep. Majette, Denise L.">Rep. Majette, Denise L.</option>
                                                    <option value="Rep. Marshall, Jim">Rep. Marshall, Jim</option>
                                                    <option value="Rep. McCotter, Thaddeus G.">Rep. McCotter, Thaddeus G.</option>
                                                    <option value="Rep. Meek, Kendrick B.">Rep. Meek, Kendrick B.</option>
                                                    <option value="Rep. Michaud, Michael H.">Rep. Michaud, Michael H.</option>
                                                    <option value="Rep. Miller, Candice S.">Rep. Miller, Candice S.</option>
                                                    <option value="Rep. Murphy, Tim">Rep. Murphy, Tim</option>
                                                    <option value="Rep. Musgrave, Marilyn N.">Rep. Musgrave, Marilyn N.</option>
                                                    <option value="Sen. Murkowski, Lisa">Sen. Murkowski, Lisa</option>
                                                    <option value="Rep. Miller, Brad">Rep. Miller, Brad</option>
                                                    <option value="Rep. Mack, Connie">Rep. Mack, Connie</option>
                                                    <option value="Rep. McHenry, Patrick T.">Rep. McHenry, Patrick T.</option>
                                                    <option value="Rep. McCaul, Michael T.">Rep. McCaul, Michael T.</option>
                                                    <option value="Rep. Marchant, Kenny">Rep. Marchant, Kenny</option>
                                                    <option value="Rep. McMorris Rodgers, Cathy">Rep. McMorris Rodgers, Cathy</option>
                                                    <option value="Rep. Moore, Gwen">Rep. Moore, Gwen</option>
                                                    <option value="Rep. Melancon, Charlie">Rep. Melancon, Charlie</option>
                                                    <option value="Sen. Martinez, Mel">Sen. Martinez, Mel</option>
                                                    <option value="Rep. Matsui, Doris O.">Rep. Matsui, Doris O.</option>
                                                    <option value="Rep. Mahoney, Tim">Rep. Mahoney, Tim</option>
                                                    <option value="Rep. McCarthy, Kevin">Rep. McCarthy, Kevin</option>
                                                    <option value="Rep. McNerney, Jerry">Rep. McNerney, Jerry</option>
                                                    <option value="Rep. Mitchell, Harry E.">Rep. Mitchell, Harry E.</option>
                                                    <option value="Rep. Murphy, Patrick J.">Rep. Murphy, Patrick J.</option>
                                                    <option value="Sen. Murphy, Christopher">Sen. Murphy, Christopher</option>
                                                    <option value="Sen. McCaskill, Claire">Sen. McCaskill, Claire</option>
                                                    <option value="Rep. Maffei, Daniel B.">Rep. Maffei, Daniel B.</option>
                                                    <option value="Rep. Markey, Betsy">Rep. Markey, Betsy</option>
                                                    <option value="Rep. Massa, Eric J. J.">Rep. Massa, Eric J. J.</option>
                                                    <option value="Rep. McMahon, Michael E.">Rep. McMahon, Michael E.</option>
                                                    <option value="Rep. Minnick, Walter">Rep. Minnick, Walter</option>
                                                    <option value="Sen. Merkley, Jeff">Sen. Merkley, Jeff</option>
                                                    <option value="Rep. McClintock, Tom">Rep. McClintock, Tom</option>
                                                    <option value="Rep. Murphy, Scott">Rep. Murphy, Scott</option>
                                                    <option value="Rep. Marino, Tom">Rep. Marino, Tom</option>
                                                    <option value="Rep. McKinley, David B.">Rep. McKinley, David B.</option>
                                                    <option value="Rep. Meehan, Patrick">Rep. Meehan, Patrick</option>
                                                    <option value="Rep. Mulvaney, Mick">Rep. Mulvaney, Mick</option>
                                                    <option value="Sen. Manchin, Joe, III">Sen. Manchin, Joe, III</option>
                                                    <option value="Rep. Massie, Thomas">Rep. Massie, Thomas</option>
                                                    <option value="Rep. Maloney, Sean Patrick">Rep. Maloney, Sean Patrick</option>
                                                    <option value="Rep. Meadows, Mark">Rep. Meadows, Mark</option>
                                                    <option value="Rep. Meng, Grace">Rep. Meng, Grace</option>
                                                    <option value="Rep. Messer, Luke">Rep. Messer, Luke</option>
                                                    <option value="Rep. Mullin, Markwayne">Rep. Mullin, Markwayne</option>
                                                    <option value="Rep. Murphy, Patrick">Rep. Murphy, Patrick</option>
                                                    <option value="Rep. McAllister, Vance M.">Rep. McAllister, Vance M.</option>
                                                    <option value="Rep. MacArthur, Thomas">Rep. MacArthur, Thomas</option>
                                                    <option value="Rep. Moolenaar, John R.">Rep. Moolenaar, John R.</option>
                                                    <option value="Rep. Mooney, Alexander X.">Rep. Mooney, Alexander X.</option>
                                                    <option value="Rep. Moulton, Seth">Rep. Moulton, Seth</option>
                                                    <option value="Rep. McSally, Martha">Rep. McSally, Martha</option>
                                                    <option value="Rep. Marshall, Roger W.">Rep. Marshall, Roger W.</option>
                                                    <option value="Rep. Mast, Brian J.">Rep. Mast, Brian J.</option>
                                                    <option value="Rep. McEachin, A. Donald">Rep. McEachin, A. Donald</option>
                                                    <option value="Rep. Mitchell, Paul">Rep. Mitchell, Paul</option>
                                                    <option value="Rep. Murphy, Stephanie N.">Rep. Murphy, Stephanie N.</option>
                                                    <option value="Rep. Nadler, Jerrold">Rep. Nadler, Jerrold</option>
                                                    <option value="Rep. Neal, Richard E.">Rep. Neal, Richard E.</option>
                                                    <option value="Sen. Nelson, Bill">Sen. Nelson, Bill</option>
                                                    <option value="Rep. Nethercutt, George R., Jr.">Rep. Nethercutt, George R., Jr.</option>
                                                    <option value="Rep. Neumann, Mark W.">Rep. Neumann, Mark W.</option>
                                                    <option value="Rep. Ney, Robert W.">Rep. Ney, Robert W.</option>
                                                    <option value="Sen. Nickles, Don">Sen. Nickles, Don</option>
                                                    <option value="Rep. Nolan, Richard M.">Rep. Nolan, Richard M.</option>
                                                    <option value="Rep. Northup, Anne M.">Rep. Northup, Anne M.</option>
                                                    <option value="Rep. Norton, Eleanor Holmes">Rep. Norton, Eleanor Holmes</option>
                                                    <option value="Rep. Norwood, Charles W.">Rep. Norwood, Charles W.</option>
                                                    <option value="Rep. Nussle, Jim">Rep. Nussle, Jim</option>
                                                    <option value="Rep. Napolitano, Grace F.">Rep. Napolitano, Grace F.</option>
                                                    <option value="Sen. Nelson, Ben">Sen. Nelson, Ben</option>
                                                    <option value="Rep. Nunes, Devin">Rep. Nunes, Devin</option>
                                                    <option value="Rep. Neugebauer, Randy">Rep. Neugebauer, Randy</option>
                                                    <option value="Rep. Nye, Glenn C.">Rep. Nye, Glenn C.</option>
                                                    <option value="Rep. Noem, Kristi L.">Rep. Noem, Kristi L.</option>
                                                    <option value="Rep. Nugent, Richard B.">Rep. Nugent, Richard B.</option>
                                                    <option value="Rep. Nunnelee, Alan">Rep. Nunnelee, Alan</option>
                                                    <option value="Rep. Negrete McLeod, Gloria">Rep. Negrete McLeod, Gloria</option>
                                                    <option value="Rep. Norcross, Donald">Rep. Norcross, Donald</option>
                                                    <option value="Rep. Newhouse, Dan">Rep. Newhouse, Dan</option>
                                                    <option value="Rep. Norman, Ralph">Rep. Norman, Ralph</option>
                                                    <option value="Rep. Oberstar, James L.">Rep. Oberstar, James L.</option>
                                                    <option value="Rep. Obey, David R.">Rep. Obey, David R.</option>
                                                    <option value="Rep. Olver, John W.">Rep. Olver, John W.</option>
                                                    <option value="Rep. Ortiz, Solomon P.">Rep. Ortiz, Solomon P.</option>
                                                    <option value="Rep. Owens, Major R.">Rep. Owens, Major R.</option>
                                                    <option value="Rep. Oxley, Michael G.">Rep. Oxley, Michael G.</option>
                                                    <option value="Rep. Ose, Doug">Rep. Ose, Doug</option>
                                                    <option value="Rep. Osborne, Tom">Rep. Osborne, Tom</option>
                                                    <option value="Rep. Otter, C. L. (Butch)">Rep. Otter, C. L. (Butch)</option>
                                                    <option value="Sen. Obama, Barack">Sen. Obama, Barack</option>
                                                    <option value="Rep. Olson, Pete">Rep. Olson, Pete</option>
                                                    <option value="Rep. Owens, William L.">Rep. Owens, William L.</option>
                                                    <option value="Rep. O" rourke,="" beto'="">Rep. O'Rourke, Beto</option>
                                                    <option value="Rep. O" halleran,="" tom'="">Rep. O'Halleran, Tom</option>
                                                    <option value="Rep. Packard, Ron">Rep. Packard, Ron</option>
                                                    <option value="Rep. Pallone, Frank, Jr.">Rep. Pallone, Frank, Jr.</option>
                                                    <option value="Rep. Pappas, Michael">Rep. Pappas, Michael</option>
                                                    <option value="Rep. Parker, Mike">Rep. Parker, Mike</option>
                                                    <option value="Rep. Pascrell, Bill, Jr.">Rep. Pascrell, Bill, Jr.</option>
                                                    <option value="Rep. Pastor, Ed">Rep. Pastor, Ed</option>
                                                    <option value="Rep. Paxon, Bill">Rep. Paxon, Bill</option>
                                                    <option value="Rep. Payne, Donald M.">Rep. Payne, Donald M.</option>
                                                    <option value="Rep. Pease, Edward A.">Rep. Pease, Edward A.</option>
                                                    <option value="Rep. Pelosi, Nancy">Rep. Pelosi, Nancy</option>
                                                    <option value="Rep. Peterson, Collin C.">Rep. Peterson, Collin C.</option>
                                                    <option value="Rep. Peterson, John E.">Rep. Peterson, John E.</option>
                                                    <option value="Rep. Petri, Thomas E.">Rep. Petri, Thomas E.</option>
                                                    <option value="Rep. Pickering, Charles W. &quot;Chip&quot;">Rep. Pickering, Charles W. "Chip"</option>
                                                    <option value="Rep. Pickett, Owen B.">Rep. Pickett, Owen B.</option>
                                                    <option value="Rep. Pitts, Joseph R.">Rep. Pitts, Joseph R.</option>
                                                    <option value="Rep. Pombo, Richard W.">Rep. Pombo, Richard W.</option>
                                                    <option value="Rep. Pomeroy, Earl">Rep. Pomeroy, Earl</option>
                                                    <option value="Rep. Porter, John Edward">Rep. Porter, John Edward</option>
                                                    <option value="Sen. Portman, Rob">Sen. Portman, Rob</option>
                                                    <option value="Rep. Poshard, Glenn">Rep. Poshard, Glenn</option>
                                                    <option value="Rep. Price, David E.">Rep. Price, David E.</option>
                                                    <option value="Rep. Pryce, Deborah">Rep. Pryce, Deborah</option>
                                                    <option value="Rep. Paul, Ron">Rep. Paul, Ron</option>
                                                    <option value="Rep. Phelps, David D.">Rep. Phelps, David D.</option>
                                                    <option value="Rep. Platts, Todd Russell">Rep. Platts, Todd Russell</option>
                                                    <option value="Rep. Putnam, Adam H.">Rep. Putnam, Adam H.</option>
                                                    <option value="Rep. Pence, Mike">Rep. Pence, Mike</option>
                                                    <option value="Rep. Pearce, Stevan">Rep. Pearce, Stevan</option>
                                                    <option value="Rep. Porter, Jon C.">Rep. Porter, Jon C.</option>
                                                    <option value="Sen. Pryor, Mark L.">Sen. Pryor, Mark L.</option>
                                                    <option value="Rep. Price, Tom">Rep. Price, Tom</option>
                                                    <option value="Rep. Poe, Ted">Rep. Poe, Ted</option>
                                                    <option value="Rep. Perlmutter, Ed">Rep. Perlmutter, Ed</option>
                                                    <option value="Rep. Paulsen, Erik">Rep. Paulsen, Erik</option>
                                                    <option value="Sen. Peters, Gary C.">Sen. Peters, Gary C.</option>
                                                    <option value="Rep. Pierluisi, Pedro R.">Rep. Pierluisi, Pedro R.</option>
                                                    <option value="Rep. Pingree, Chellie">Rep. Pingree, Chellie</option>
                                                    <option value="Rep. Polis, Jared">Rep. Polis, Jared</option>
                                                    <option value="Rep. Posey, Bill">Rep. Posey, Bill</option>
                                                    <option value="Rep. Perriello, Thomas S.P.">Rep. Perriello, Thomas S.P.</option>
                                                    <option value="Rep. Palazzo, Steven M.">Rep. Palazzo, Steven M.</option>
                                                    <option value="Rep. Pompeo, Mike">Rep. Pompeo, Mike</option>
                                                    <option value="Sen. Paul, Rand">Sen. Paul, Rand</option>
                                                    <option value="Rep. Payne, Donald M., Jr.">Rep. Payne, Donald M., Jr.</option>
                                                    <option value="Rep. Perry, Scott">Rep. Perry, Scott</option>
                                                    <option value="Rep. Pittenger, Robert">Rep. Pittenger, Robert</option>
                                                    <option value="Rep. Pocan, Mark">Rep. Pocan, Mark</option>
                                                    <option value="Rep. Peters, Scott H.">Rep. Peters, Scott H.</option>
                                                    <option value="Rep. Palmer, Gary J.">Rep. Palmer, Gary J.</option>
                                                    <option value="Rep. Plaskett, Stacey E.">Rep. Plaskett, Stacey E.</option>
                                                    <option value="Rep. Poliquin, Bruce">Rep. Poliquin, Bruce</option>
                                                    <option value="Sen. Perdue, David">Sen. Perdue, David</option>
                                                    <option value="Rep. Panetta, Jimmy">Rep. Panetta, Jimmy</option>
                                                    <option value="Rep. Quinn, Jack">Rep. Quinn, Jack</option>
                                                    <option value="Rep. Quigley, Mike">Rep. Quigley, Mike</option>
                                                    <option value="Rep. Quayle, Benjamin">Rep. Quayle, Benjamin</option>
                                                    <option value="Rep. Radanovich, George">Rep. Radanovich, George</option>
                                                    <option value="Rep. Rahall, Nick J., II">Rep. Rahall, Nick J., II</option>
                                                    <option value="Rep. Ramstad, Jim">Rep. Ramstad, Jim</option>
                                                    <option value="Rep. Rangel, Charles B.">Rep. Rangel, Charles B.</option>
                                                    <option value="Sen. Reed, Jack">Sen. Reed, Jack</option>
                                                    <option value="Rep. Regula, Ralph">Rep. Regula, Ralph</option>
                                                    <option value="Sen. Reid, Harry">Sen. Reid, Harry</option>
                                                    <option value="Rep. Reyes, Silvestre">Rep. Reyes, Silvestre</option>
                                                    <option value="Rep. Richardson, Bill">Rep. Richardson, Bill</option>
                                                    <option value="Rep. Riggs, Frank">Rep. Riggs, Frank</option>
                                                    <option value="Rep. Riley, Bob">Rep. Riley, Bob</option>
                                                    <option value="Rep. Rivers, Lynn N.">Rep. Rivers, Lynn N.</option>
                                                    <option value="Sen. Robb, Charles S.">Sen. Robb, Charles S.</option>
                                                    <option value="Sen. Roberts, Pat">Sen. Roberts, Pat</option>
                                                    <option value="Sen. Rockefeller, John D., IV">Sen. Rockefeller, John D., IV</option>
                                                    <option value="Rep. Roemer, Tim">Rep. Roemer, Tim</option>
                                                    <option value="Rep. Rogan, James E.">Rep. Rogan, James E.</option>
                                                    <option value="Rep. Rogers, Harold">Rep. Rogers, Harold</option>
                                                    <option value="Rep. Rohrabacher, Dana">Rep. Rohrabacher, Dana</option>
                                                    <option value="Rep. Romero-Barcelo, Carlos A.">Rep. Romero-Barcelo, Carlos A.</option>
                                                    <option value="Rep. Ros-Lehtinen, Ileana">Rep. Ros-Lehtinen, Ileana</option>
                                                    <option value="Sen. Roth Jr., William V.">Sen. Roth Jr., William V.</option>
                                                    <option value="Rep. Rothman, Steven R.">Rep. Rothman, Steven R.</option>
                                                    <option value="Rep. Roukema, Marge">Rep. Roukema, Marge</option>
                                                    <option value="Rep. Roybal-Allard, Lucille">Rep. Roybal-Allard, Lucille</option>
                                                    <option value="Rep. Royce, Edward R.">Rep. Royce, Edward R.</option>
                                                    <option value="Rep. Rush, Bobby L.">Rep. Rush, Bobby L.</option>
                                                    <option value="Rep. Ryun, Jim">Rep. Ryun, Jim</option>
                                                    <option value="Rep. Redmond, Bill">Rep. Redmond, Bill</option>
                                                    <option value="Rep. Rodriguez, Ciro D.">Rep. Rodriguez, Ciro D.</option>
                                                    <option value="Rep. Reynolds, Thomas M.">Rep. Reynolds, Thomas M.</option>
                                                    <option value="Rep. Ryan, Paul">Rep. Ryan, Paul</option>
                                                    <option value="Rep. Rehberg, Denny">Rep. Rehberg, Denny</option>
                                                    <option value="Rep. Rogers, Michael J.">Rep. Rogers, Michael J.</option>
                                                    <option value="Rep. Ross, Mike">Rep. Ross, Mike</option>
                                                    <option value="Rep. Renzi, Rick">Rep. Renzi, Rick</option>
                                                    <option value="Rep. Rogers, Mike D.">Rep. Rogers, Mike D.</option>
                                                    <option value="Rep. Ruppersberger, C. A. Dutch">Rep. Ruppersberger, C. A. Dutch</option>
                                                    <option value="Rep. Ryan, Tim">Rep. Ryan, Tim</option>
                                                    <option value="Rep. Reichert, David G.">Rep. Reichert, David G.</option>
                                                    <option value="Rep. Roskam, Peter J.">Rep. Roskam, Peter J.</option>
                                                    <option value="Rep. Richardson, Laura">Rep. Richardson, Laura</option>
                                                    <option value="Rep. Roe, David P.">Rep. Roe, David P.</option>
                                                    <option value="Rep. Rooney, Thomas J.">Rep. Rooney, Thomas J.</option>
                                                    <option value="Sen. Risch, James E.">Sen. Risch, James E.</option>
                                                    <option value="Rep. Reed, Tom">Rep. Reed, Tom</option>
                                                    <option value="Rep. Renacci, James B.">Rep. Renacci, James B.</option>
                                                    <option value="Rep. Ribble, Reid J.">Rep. Ribble, Reid J.</option>
                                                    <option value="Rep. Richmond, Cedric L.">Rep. Richmond, Cedric L.</option>
                                                    <option value="Rep. Rigell, E. Scott">Rep. Rigell, E. Scott</option>
                                                    <option value="Rep. Rivera, David">Rep. Rivera, David</option>
                                                    <option value="Rep. Roby, Martha">Rep. Roby, Martha</option>
                                                    <option value="Rep. Rokita, Todd">Rep. Rokita, Todd</option>
                                                    <option value="Rep. Ross, Dennis A.">Rep. Ross, Dennis A.</option>
                                                    <option value="Rep. Runyan, Jon">Rep. Runyan, Jon</option>
                                                    <option value="Sen. Rubio, Marco">Sen. Rubio, Marco</option>
                                                    <option value="Rep. Radel, Trey">Rep. Radel, Trey</option>
                                                    <option value="Rep. Rice, Tom">Rep. Rice, Tom</option>
                                                    <option value="Rep. Rothfus, Keith J.">Rep. Rothfus, Keith J.</option>
                                                    <option value="Rep. Ruiz, Raul">Rep. Ruiz, Raul</option>
                                                    <option value="Rep. Radewagen, Aumua Amata Coleman">Rep. Radewagen, Aumua Amata Coleman</option>
                                                    <option value="Rep. Ratcliffe, John">Rep. Ratcliffe, John</option>
                                                    <option value="Rep. Rice, Kathleen M.">Rep. Rice, Kathleen M.</option>
                                                    <option value="Rep. Rouzer, David">Rep. Rouzer, David</option>
                                                    <option value="Rep. Russell, Steve">Rep. Russell, Steve</option>
                                                    <option value="Sen. Rounds, Mike">Sen. Rounds, Mike</option>
                                                    <option value="Rep. Raskin, Jamie">Rep. Raskin, Jamie</option>
                                                    <option value="Rep. Rooney, Francis">Rep. Rooney, Francis</option>
                                                    <option value="Rep. Rosen, Jacky">Rep. Rosen, Jacky</option>
                                                    <option value="Rep. Rutherford, John H.">Rep. Rutherford, John H.</option>
                                                    <option value="Rep. Sabo, Martin Olav">Rep. Sabo, Martin Olav</option>
                                                    <option value="Rep. Salmon, Matt">Rep. Salmon, Matt</option>
                                                    <option value="Rep. Sanchez, Loretta">Rep. Sanchez, Loretta</option>
                                                    <option value="Sen. Sanders, Bernard">Sen. Sanders, Bernard</option>
                                                    <option value="Rep. Sandlin, Max">Rep. Sandlin, Max</option>
                                                    <option value="Rep. Sanford, Mark">Rep. Sanford, Mark</option>
                                                    <option value="Sen. Santorum, Rick">Sen. Santorum, Rick</option>
                                                    <option value="Sen. Sarbanes, Paul S.">Sen. Sarbanes, Paul S.</option>
                                                    <option value="Rep. Sawyer, Tom">Rep. Sawyer, Tom</option>
                                                    <option value="Rep. Saxton, Jim">Rep. Saxton, Jim</option>
                                                    <option value="Rep. Scarborough, Joe">Rep. Scarborough, Joe</option>
                                                    <option value="Rep. Schaefer, Dan">Rep. Schaefer, Dan</option>
                                                    <option value="Rep. Schaffer, Bob">Rep. Schaffer, Bob</option>
                                                    <option value="Rep. Schiff, Steven">Rep. Schiff, Steven</option>
                                                    <option value="Sen. Schumer, Charles E.">Sen. Schumer, Charles E.</option>
                                                    <option value="Rep. Scott, Robert C. &quot;Bobby&quot;">Rep. Scott, Robert C. "Bobby"</option>
                                                    <option value="Rep. Sensenbrenner, F. James, Jr.">Rep. Sensenbrenner, F. James, Jr.</option>
                                                    <option value="Rep. Serrano, Jose E.">Rep. Serrano, Jose E.</option>
                                                    <option value="Rep. Sessions, Pete">Rep. Sessions, Pete</option>
                                                    <option value="Rep. Shadegg, John B.">Rep. Shadegg, John B.</option>
                                                    <option value="Rep. Shaw, E. Clay, Jr.">Rep. Shaw, E. Clay, Jr.</option>
                                                    <option value="Sen. Shelby, Richard C.">Sen. Shelby, Richard C.</option>
                                                    <option value="Rep. Sherman, Brad">Rep. Sherman, Brad</option>
                                                    <option value="Rep. Shimkus, John">Rep. Shimkus, John</option>
                                                    <option value="Rep. Shuster, Bud">Rep. Shuster, Bud</option>
                                                    <option value="Rep. Sisisky, Norman">Rep. Sisisky, Norman</option>
                                                    <option value="Rep. Skaggs, David E.">Rep. Skaggs, David E.</option>
                                                    <option value="Rep. Skeen, Joe">Rep. Skeen, Joe</option>
                                                    <option value="Rep. Skelton, Ike">Rep. Skelton, Ike</option>
                                                    <option value="Rep. Slaughter, Louise McIntosh">Rep. Slaughter, Louise McIntosh</option>
                                                    <option value="Rep. Smith, Adam">Rep. Smith, Adam</option>
                                                    <option value="Rep. Smith, Christopher H.">Rep. Smith, Christopher H.</option>
                                                    <option value="Rep. Smith, Lamar">Rep. Smith, Lamar</option>
                                                    <option value="Rep. Smith, Linda">Rep. Smith, Linda</option>
                                                    <option value="Rep. Smith, Nick">Rep. Smith, Nick</option>
                                                    <option value="Sen. Smith, Bob">Sen. Smith, Bob</option>
                                                    <option value="Rep. Smith, Robert">Rep. Smith, Robert</option>
                                                    <option value="Rep. Snowbarger, Vince">Rep. Snowbarger, Vince</option>
                                                    <option value="Sen. Snowe, Olympia J.">Sen. Snowe, Olympia J.</option>
                                                    <option value="Rep. Snyder, Vic">Rep. Snyder, Vic</option>
                                                    <option value="Rep. Solomon, Gerald B. H.">Rep. Solomon, Gerald B. H.</option>
                                                    <option value="Sen. Specter, Arlen">Sen. Specter, Arlen</option>
                                                    <option value="Rep. Spence, Floyd">Rep. Spence, Floyd</option>
                                                    <option value="Rep. Spratt, John M., Jr.">Rep. Spratt, John M., Jr.</option>
                                                    <option value="Sen. Stabenow, Debbie">Sen. Stabenow, Debbie</option>
                                                    <option value="Rep. Stark, Fortney Pete">Rep. Stark, Fortney Pete</option>
                                                    <option value="Rep. Stearns, Cliff">Rep. Stearns, Cliff</option>
                                                    <option value="Rep. Stenholm, Charles W.">Rep. Stenholm, Charles W.</option>
                                                    <option value="Sen. Stevens, Ted">Sen. Stevens, Ted</option>
                                                    <option value="Rep. Stockman, Steve">Rep. Stockman, Steve</option>
                                                    <option value="Rep. Stokes, Louis">Rep. Stokes, Louis</option>
                                                    <option value="Rep. Strickland, Ted">Rep. Strickland, Ted</option>
                                                    <option value="Rep. Stump, Bob">Rep. Stump, Bob</option>
                                                    <option value="Rep. Stupak, Bart">Rep. Stupak, Bart</option>
                                                    <option value="Sen. Sununu, John E.">Sen. Sununu, John E.</option>
                                                    <option value="Sen. Sessions, Jeff">Sen. Sessions, Jeff</option>
                                                    <option value="Sen. Smith, Gordon H.">Sen. Smith, Gordon H.</option>
                                                    <option value="Rep. Souder, Mark E.">Rep. Souder, Mark E.</option>
                                                    <option value="Rep. Shays, Christopher">Rep. Shays, Christopher</option>
                                                    <option value="Rep. Schakowsky, Janice D.">Rep. Schakowsky, Janice D.</option>
                                                    <option value="Rep. Sherwood, Don">Rep. Sherwood, Don</option>
                                                    <option value="Rep. Shows, Ronnie">Rep. Shows, Ronnie</option>
                                                    <option value="Rep. Simpson, Michael K.">Rep. Simpson, Michael K.</option>
                                                    <option value="Rep. Sweeney, John E.">Rep. Sweeney, John E.</option>
                                                    <option value="Rep. Schiff, Adam B.">Rep. Schiff, Adam B.</option>
                                                    <option value="Rep. Schrock, Edward L.">Rep. Schrock, Edward L.</option>
                                                    <option value="Rep. Simmons, Rob">Rep. Simmons, Rob</option>
                                                    <option value="Rep. Solis, Hilda L.">Rep. Solis, Hilda L.</option>
                                                    <option value="Rep. Shuster, Bill">Rep. Shuster, Bill</option>
                                                    <option value="Rep. Sullivan, John">Rep. Sullivan, John</option>
                                                    <option value="Rep. Sanchez, Linda T.">Rep. Sanchez, Linda T.</option>
                                                    <option value="Rep. Scott, David">Rep. Scott, David</option>
                                                    <option value="Rep. Salazar, John T.">Rep. Salazar, John T.</option>
                                                    <option value="Rep. Sodrel, Michael E.">Rep. Sodrel, Michael E.</option>
                                                    <option value="Rep. Schwarz, John J.H. &quot;Joe&quot;">Rep. Schwarz, John J.H. "Joe"</option>
                                                    <option value="Rep. Schwartz, Allyson Y.">Rep. Schwartz, Allyson Y.</option>
                                                    <option value="Sen. Salazar, Ken">Sen. Salazar, Ken</option>
                                                    <option value="Rep. Schmidt, Jean">Rep. Schmidt, Jean</option>
                                                    <option value="Rep. Sires, Albio">Rep. Sires, Albio</option>
                                                    <option value="Rep. Sekula Gibbs, Shelley">Rep. Sekula Gibbs, Shelley</option>
                                                    <option value="Rep. Sali, Bill">Rep. Sali, Bill</option>
                                                    <option value="Rep. Sarbanes, John P.">Rep. Sarbanes, John P.</option>
                                                    <option value="Rep. Sestak, Joe">Rep. Sestak, Joe</option>
                                                    <option value="Rep. Shea-Porter, Carol">Rep. Shea-Porter, Carol</option>
                                                    <option value="Rep. Shuler, Heath">Rep. Shuler, Heath</option>
                                                    <option value="Rep. Smith, Adrian">Rep. Smith, Adrian</option>
                                                    <option value="Rep. Space, Zachary T.">Rep. Space, Zachary T.</option>
                                                    <option value="Rep. Sutton, Betty">Rep. Sutton, Betty</option>
                                                    <option value="Rep. Speier, Jackie">Rep. Speier, Jackie</option>
                                                    <option value="Rep. Scalise, Steve">Rep. Scalise, Steve</option>
                                                    <option value="Rep. Sablan, Gregorio Kilili Camacho">Rep. Sablan, Gregorio Kilili Camacho</option>
                                                    <option value="Rep. Schauer, Mark H.">Rep. Schauer, Mark H.</option>
                                                    <option value="Rep. Schock, Aaron">Rep. Schock, Aaron</option>
                                                    <option value="Rep. Schrader, Kurt">Rep. Schrader, Kurt</option>
                                                    <option value="Sen. Shaheen, Jeanne">Sen. Shaheen, Jeanne</option>
                                                    <option value="Rep. Schilling, Robert T.">Rep. Schilling, Robert T.</option>
                                                    <option value="Rep. Schweikert, David">Rep. Schweikert, David</option>
                                                    <option value="Sen. Scott, Tim">Sen. Scott, Tim</option>
                                                    <option value="Rep. Sewell, Terri A.">Rep. Sewell, Terri A.</option>
                                                    <option value="Rep. Southerland, Steve II">Rep. Southerland, Steve II</option>
                                                    <option value="Rep. Stivers, Steve">Rep. Stivers, Steve</option>
                                                    <option value="Rep. Stutzman, Marlin A.">Rep. Stutzman, Marlin A.</option>
                                                    <option value="Rep. Scott, Austin">Rep. Scott, Austin</option>
                                                    <option value="Rep. Schneider, Bradley Scott">Rep. Schneider, Bradley Scott</option>
                                                    <option value="Rep. Sinema, Kyrsten">Rep. Sinema, Kyrsten</option>
                                                    <option value="Rep. Stewart, Chris">Rep. Stewart, Chris</option>
                                                    <option value="Rep. Swalwell, Eric">Rep. Swalwell, Eric</option>
                                                    <option value="Sen. Schatz, Brian">Sen. Schatz, Brian</option>
                                                    <option value="Rep. Smith, Jason">Rep. Smith, Jason</option>
                                                    <option value="Rep. Stefanik, Elise M.">Rep. Stefanik, Elise M.</option>
                                                    <option value="Sen. Sasse, Ben">Sen. Sasse, Ben</option>
                                                    <option value="Sen. Sullivan, Dan">Sen. Sullivan, Dan</option>
                                                    <option value="Rep. Smucker, Lloyd">Rep. Smucker, Lloyd</option>
                                                    <option value="Rep. Soto, Darren">Rep. Soto, Darren</option>
                                                    <option value="Rep. Suozzi, Thomas R.">Rep. Suozzi, Thomas R.</option>
                                                    <option value="Sen. Strange, Luther">Sen. Strange, Luther</option>
                                                    <option value="Sen. Talent, Jim">Sen. Talent, Jim</option>
                                                    <option value="Rep. Tanner, John S.">Rep. Tanner, John S.</option>
                                                    <option value="Rep. Tauscher, Ellen O.">Rep. Tauscher, Ellen O.</option>
                                                    <option value="Rep. Tauzin, W. J. (Billy)">Rep. Tauzin, W. J. (Billy)</option>
                                                    <option value="Rep. Taylor, Charles H.">Rep. Taylor, Charles H.</option>
                                                    <option value="Rep. Taylor, Gene">Rep. Taylor, Gene</option>
                                                    <option value="Rep. Tejeda, Frank">Rep. Tejeda, Frank</option>
                                                    <option value="Sen. Thomas, Craig">Sen. Thomas, Craig</option>
                                                    <option value="Rep. Thomas, William M.">Rep. Thomas, William M.</option>
                                                    <option value="Rep. Thompson, Bennie G.">Rep. Thompson, Bennie G.</option>
                                                    <option value="Rep. Thornberry, Mac">Rep. Thornberry, Mac</option>
                                                    <option value="Sen. Thune, John">Sen. Thune, John</option>
                                                    <option value="Rep. Thurman, Karen L.">Rep. Thurman, Karen L.</option>
                                                    <option value="Sen. Thurmond, Strom">Sen. Thurmond, Strom</option>
                                                    <option value="Rep. Tiahrt, Todd">Rep. Tiahrt, Todd</option>
                                                    <option value="Rep. Tierney, John F.">Rep. Tierney, John F.</option>
                                                    <option value="Rep. Torres, Estaban Edward">Rep. Torres, Estaban Edward</option>
                                                    <option value="Sen. Torricelli, Robert G.">Sen. Torricelli, Robert G.</option>
                                                    <option value="Rep. Towns, Edolphus">Rep. Towns, Edolphus</option>
                                                    <option value="Rep. Traficant, James A., Jr.">Rep. Traficant, James A., Jr.</option>
                                                    <option value="Rep. Turner, Jim">Rep. Turner, Jim</option>
                                                    <option value="Sen. Thompson, Fred">Sen. Thompson, Fred</option>
                                                    <option value="Rep. Tancredo, Thomas G.">Rep. Tancredo, Thomas G.</option>
                                                    <option value="Rep. Terry, Lee">Rep. Terry, Lee</option>
                                                    <option value="Rep. Thompson, Mike">Rep. Thompson, Mike</option>
                                                    <option value="Sen. Toomey, Pat">Sen. Toomey, Pat</option>
                                                    <option value="Rep. Tiberi, Patrick J.">Rep. Tiberi, Patrick J.</option>
                                                    <option value="Rep. Turner, Michael R.">Rep. Turner, Michael R.</option>
                                                    <option value="Sen. Tester, Jon">Sen. Tester, Jon</option>
                                                    <option value="Rep. Tsongas, Niki">Rep. Tsongas, Niki</option>
                                                    <option value="Rep. Teague, Harry">Rep. Teague, Harry</option>
                                                    <option value="Rep. Thompson, Glenn">Rep. Thompson, Glenn</option>
                                                    <option value="Rep. Titus, Dina">Rep. Titus, Dina</option>
                                                    <option value="Rep. Tonko, Paul">Rep. Tonko, Paul</option>
                                                    <option value="Rep. Tipton, Scott R.">Rep. Tipton, Scott R.</option>
                                                    <option value="Rep. Turner, Robert L.">Rep. Turner, Robert L.</option>
                                                    <option value="Rep. Takano, Mark">Rep. Takano, Mark</option>
                                                    <option value="Rep. Takai, Mark">Rep. Takai, Mark</option>
                                                    <option value="Rep. Torres, Norma J.">Rep. Torres, Norma J.</option>
                                                    <option value="Rep. Trott, David A.">Rep. Trott, David A.</option>
                                                    <option value="Sen. Tillis, Thom">Sen. Tillis, Thom</option>
                                                    <option value="Rep. Taylor, Scott">Rep. Taylor, Scott</option>
                                                    <option value="Rep. Tenney, Claudia">Rep. Tenney, Claudia</option>
                                                    <option value="Rep. Underwood, Robert A.">Rep. Underwood, Robert A.</option>
                                                    <option value="Rep. Upton, Fred">Rep. Upton, Fred</option>
                                                    <option value="Sen. Udall, Mark">Sen. Udall, Mark</option>
                                                    <option value="Sen. Udall, Tom">Sen. Udall, Tom</option>
                                                    <option value="Rep. Velazquez, Nydia M.">Rep. Velazquez, Nydia M.</option>
                                                    <option value="Rep. Vento, Bruce F.">Rep. Vento, Bruce F.</option>
                                                    <option value="Rep. Visclosky, Peter J.">Rep. Visclosky, Peter J.</option>
                                                    <option value="Sen. Voinovich, George V.">Sen. Voinovich, George V.</option>
                                                    <option value="Sen. Vitter, David">Sen. Vitter, David</option>
                                                    <option value="Sen. Van Hollen, Chris">Sen. Van Hollen, Chris</option>
                                                    <option value="Rep. Valadao, David G.">Rep. Valadao, David G.</option>
                                                    <option value="Rep. Vargas, Juan">Rep. Vargas, Juan</option>
                                                    <option value="Rep. Veasey, Marc A.">Rep. Veasey, Marc A.</option>
                                                    <option value="Rep. Vela, Filemon">Rep. Vela, Filemon</option>
                                                    <option value="Rep. Walsh, James T.">Rep. Walsh, James T.</option>
                                                    <option value="Rep. Wamp, Zach">Rep. Wamp, Zach</option>
                                                    <option value="Sen. Warner, John">Sen. Warner, John</option>
                                                    <option value="Rep. Waters, Maxine">Rep. Waters, Maxine</option>
                                                    <option value="Rep. Watkins, Wes">Rep. Watkins, Wes</option>
                                                    <option value="Rep. Watt, Melvin L.">Rep. Watt, Melvin L.</option>
                                                    <option value="Rep. Watts, J. C., Jr.">Rep. Watts, J. C., Jr.</option>
                                                    <option value="Rep. Waxman, Henry A.">Rep. Waxman, Henry A.</option>
                                                    <option value="Rep. Weldon, Dave">Rep. Weldon, Dave</option>
                                                    <option value="Rep. Weldon, Curt">Rep. Weldon, Curt</option>
                                                    <option value="Rep. Weller, Jerry">Rep. Weller, Jerry</option>
                                                    <option value="Sen. Wellstone, Paul D.">Sen. Wellstone, Paul D.</option>
                                                    <option value="Rep. Wexler, Robert">Rep. Wexler, Robert</option>
                                                    <option value="Rep. Weygand, Robert A.">Rep. Weygand, Robert A.</option>
                                                    <option value="Rep. White, Rick">Rep. White, Rick</option>
                                                    <option value="Rep. Whitfield, Ed">Rep. Whitfield, Ed</option>
                                                    <option value="Sen. Wicker, Roger F.">Sen. Wicker, Roger F.</option>
                                                    <option value="Rep. Wise, Robert E., Jr.">Rep. Wise, Robert E., Jr.</option>
                                                    <option value="Rep. Wolf, Frank R.">Rep. Wolf, Frank R.</option>
                                                    <option value="Rep. Woolsey, Lynn C.">Rep. Woolsey, Lynn C.</option>
                                                    <option value="Sen. Wyden, Ron">Sen. Wyden, Ron</option>
                                                    <option value="Rep. Wynn, Albert Russell">Rep. Wynn, Albert Russell</option>
                                                    <option value="Rep. Wilson, Heather">Rep. Wilson, Heather</option>
                                                    <option value="Rep. Walden, Greg">Rep. Walden, Greg</option>
                                                    <option value="Rep. Weiner, Anthony D.">Rep. Weiner, Anthony D.</option>
                                                    <option value="Rep. Wu, David">Rep. Wu, David</option>
                                                    <option value="Rep. Watson, Diane E.">Rep. Watson, Diane E.</option>
                                                    <option value="Rep. Wilson, Joe">Rep. Wilson, Joe</option>
                                                    <option value="Rep. Westmoreland, Lynn A.">Rep. Westmoreland, Lynn A.</option>
                                                    <option value="Rep. Wasserman Schultz, Debbie">Rep. Wasserman Schultz, Debbie</option>
                                                    <option value="Rep. Walberg, Tim">Rep. Walberg, Tim</option>
                                                    <option value="Rep. Walz, Timothy J.">Rep. Walz, Timothy J.</option>
                                                    <option value="Rep. Welch, Peter">Rep. Welch, Peter</option>
                                                    <option value="Rep. Wilson, Charles A.">Rep. Wilson, Charles A.</option>
                                                    <option value="Sen. Whitehouse, Sheldon">Sen. Whitehouse, Sheldon</option>
                                                    <option value="Sen. Webb, Jim">Sen. Webb, Jim</option>
                                                    <option value="Rep. Wittman, Robert J.">Rep. Wittman, Robert J.</option>
                                                    <option value="Sen. Warner, Mark R.">Sen. Warner, Mark R.</option>
                                                    <option value="Rep. Webster, Daniel">Rep. Webster, Daniel</option>
                                                    <option value="Rep. West, Allen B.">Rep. West, Allen B.</option>
                                                    <option value="Rep. Wilson, Frederica S.">Rep. Wilson, Frederica S.</option>
                                                    <option value="Rep. Womack, Steve">Rep. Womack, Steve</option>
                                                    <option value="Rep. Woodall, Rob">Rep. Woodall, Rob</option>
                                                    <option value="Rep. Walsh, Joe">Rep. Walsh, Joe</option>
                                                    <option value="Rep. Wagner, Ann">Rep. Wagner, Ann</option>
                                                    <option value="Rep. Walorski, Jackie">Rep. Walorski, Jackie</option>
                                                    <option value="Rep. Weber, Randy K., Sr.">Rep. Weber, Randy K., Sr.</option>
                                                    <option value="Rep. Wenstrup, Brad R.">Rep. Wenstrup, Brad R.</option>
                                                    <option value="Rep. Williams, Roger">Rep. Williams, Roger</option>
                                                    <option value="Sen. Warren, Elizabeth">Sen. Warren, Elizabeth</option>
                                                    <option value="Sen. Walsh, John E.">Sen. Walsh, John E.</option>
                                                    <option value="Rep. Walker, Mark">Rep. Walker, Mark</option>
                                                    <option value="Rep. Walters, Mimi">Rep. Walters, Mimi</option>
                                                    <option value="Rep. Westerman, Bruce">Rep. Westerman, Bruce</option>
                                                    <option value="Rep. Watson Coleman, Bonnie">Rep. Watson Coleman, Bonnie</option>
                                                    <option value="Rep. Yates, Sidney R.">Rep. Yates, Sidney R.</option>
                                                    <option value="Rep. Young, C. W. Bill">Rep. Young, C. W. Bill</option>
                                                    <option value="Rep. Young, Don">Rep. Young, Don</option>
                                                    <option value="Rep. Yarmuth, John A.">Rep. Yarmuth, John A.</option>
                                                    <option value="Rep. Yoder, Kevin">Rep. Yoder, Kevin</option>
                                                    <option value="Sen. Young, Todd C.">Sen. Young, Todd C.</option>
                                                    <option value="Rep. Yoho, Ted S.">Rep. Yoho, Ted S.</option>
                                                    <option value="Rep. Young, David">Rep. Young, David</option>
                                                    <option value="Rep. Zeldin, Lee M.">Rep. Zeldin, Lee M.</option>
                                                    <option value="Rep. Zinke, Ryan K.">Rep. Zinke, Ryan K.</option>
                                                    </select><span className="select2 select2-container select2-container--default" dir="ltr" style="width: 236px;"><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="Type or Select Cosponsor Name" style="width: 236px;"></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </li>
                                            <li id="committeeFilterList" className="">
                                                <label for="committee-filter">
                                                    Committee
                                                </label>
                                                <select multiple="" name="committee-filter" id="committee-filter" data-committee="" data-placeholder="Type or Select Committees" className="js-select2 select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                                                    <option value="Senate Judiciary-Subcommittee on Crime and Terrorism">
                                                                        Senate Judiciary-Subcommittee on Crime and Terrorism</option>
                                                            <option value="House Oversight and Government Reform-Subcommittee on Government Efficiency and Financial Management">
                                                                        House Oversight and Government Reform-Subcommittee on Government Efficiency and Financial Management</option>
                                                            <option value="House Judiciary">
                                                                        House Judiciary</option>
                                                            <option value="House Judiciary-Subcommittee on Crime">
                                                                        House Judiciary-Subcommittee on Crime</option>
                                                            <option value="House Agriculture-Subcommittee on General Farm Commodities, Resource Conservation and Credit">
                                                                        House Agriculture-Subcommittee on General Farm Commodities, Resource Conservation and Credit</option>
                                                            <option value="House Judiciary-Subcommittee on Constitution and Civil Justice">
                                                                        House Judiciary-Subcommittee on Constitution and Civil Justice</option>
                                                            <option value="Senate Judiciary-Subcommittee on Youth Violence">
                                                                        Senate Judiciary-Subcommittee on Youth Violence</option>
                                                            <option value="Senate Appropriations-Subcommittee on Military Construction and Veterans Affairs, and Related Agencies">
                                                                        Senate Appropriations-Subcommittee on Military Construction and Veterans Affairs, and Related Agencies</option>
                                                            <option value="House Science, Space, and Technology-Subcommittee on Energy">
                                                                        House Science, Space, and Technology-Subcommittee on Energy</option>
                                                            <option value="Senate Judiciary-Subcommittee on Bankruptcy and the Courts">
                                                                        Senate Judiciary-Subcommittee on Bankruptcy and the Courts</option>
                                                            </select><span className="select2 select2-container select2-container--default" dir="ltr" style="width: 236px;"><span className="selection"><span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1"><ul className="select2-selection__rendered"><li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="Type or Select Committees" style="width: 236px;"></li></ul></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                            </li>
                                            <li id="currentStatusList" className="">
                                                    <label for="currentStatus">
                                                        Current Status
                                                    </label>
                                                    <a className="token has-tooltip" title="Search for legislation by stage in the legislation process, i.e. find legislation currently in a House committee.">?</a>
                                                    <select name="currentStatus" id="currentStatus" data-current-status="" className="directory-filter-select">
                                                        <option selected="" value="">All</option>
                                                        <option value="House Committee">House Committee</option>
                                                                <option value="House Floor">House Floor</option>
                                                                <option value="Waiting for House consideration">Waiting for House consideration</option>
                                                                <option value="Resolution agreed to in the House">Resolution agreed to in the House</option>
                                                                <option value="Senate Committee">Senate Committee</option>
                                                                <option value="Senate Floor">Senate Floor</option>
                                                                <option value="Waiting for Senate consideration">Waiting for Senate consideration</option>
                                                                <option value="Resolution agreed to in the Senate">Resolution agreed to in the Senate</option>
                                                                <option value="Resolution agreed to in both chambers">Resolution agreed to in both chambers</option>
                                                                <option value="Conference">Conference</option>
                                                                <option value="President">President</option>
                                                                <option value="Public Law">Public Law</option>
                                                                <option value="Died in previous Congress" className="fsi" disabled="">Died in previous Congress</option>
                                                                <option value="Amendment - Introduced/Offered">Amendment - Introduced/Offered</option>
                                                                <option value="Amendment - Submitted">Amendment - Submitted</option>
                                                                <option value="Amendment - Adopted">Amendment - Adopted</option>
                                                                <option value="Amendment - Rejected">Amendment - Rejected</option>
                                                                <option value="Amendment - Withdrawn">Amendment - Withdrawn</option>
                                                                </select>
                                                </li>
                                            <li id="actionListItem" className="">
                                                <label for="actions">
                                                    Actions
                                                </label>
                                                <a className="token has-tooltip" title="Search for legislation by specific action and time-frame, i.e. find legislation introduced last week.">?</a>
                                                <select name="actions" id="actions" className="directory-filter-select">
                                                    <option selected="" value=""> -- Select an Action -- </option>
                                                    <option value="Introduced in House">Introduced in House</option>
                                                    <option value="Introduced in Senate">Introduced in Senate</option>
                                                    <option value="Referred to Senate committee">Referred to Senate committee</option>
                                                    <option value="Senate committee/subcommittee actions">Senate committee/subcommittee actions</option>
                                                    <option value="Reported to Senate">Reported to Senate</option>
                                                    <option value="Senate committee discharged">Senate committee discharged</option>
                                                    <option value="Senate committee report filed after reporting">Senate committee report filed after reporting</option>
                                                    <option value="Senate floor actions">Senate floor actions</option>
                                                    <option value="Passed/agreed to in Senate">Passed/agreed to in Senate</option>
                                                    <option value="Failed of passage/not agreed to in Senate">Failed of passage/not agreed to in Senate</option>
                                                    <option value="Resolving differences -- House actions">Resolving differences -- House actions</option>
                                                    <option value="Referred to House Committee">Referred to House Committee</option>
                                                    <option value="Resolving differences -- Senate actions">Resolving differences -- Senate actions</option>
                                                    <option value="Conference committee actions">Conference committee actions</option>
                                                    <option value="Conference report filed">Conference report filed</option>
                                                    <option value="Conference report agreed to in House">Conference report agreed to in House</option>
                                                    <option value="Conference report agreed to in Senate">Conference report agreed to in Senate</option>
                                                    <option value="Presented to President">Presented to President</option>
                                                    <option value="Signed by President/Became Law">Signed by President/Became Law</option>
                                                    <option value="Vetoed by President">Vetoed by President</option>
                                                    <option value="Passed House over veto">Passed House over veto</option>
                                                    <option value="Failed of passage in House over veto">Failed of passage in House over veto</option>
                                                    <option value="Passed Senate over veto">Passed Senate over veto</option>
                                                    <option value="Failed of passage in Senate over veto">Failed of passage in Senate over veto</option>
                                                    <option value="House committee/subcommitee actions">House committee/subcommitee actions</option>
                                                    <option value="House floor actions">House floor actions</option>
                                                    <option value="Reported to House">Reported to House</option>
                                                    <option value="House Commitee discharged">House Commitee discharged</option>
                                                    <option value="House Amendment Activity">House Amendment Activity</option>
                                                    <option value="Passed/agreed to in House">Passed/agreed to in House</option>
                                                    <option value="Failed of passage/not agreed to in House">Failed of passage/not agreed to in House</option>
                                                    <option value="Senate Amendment Activity">Senate Amendment Activity</option>
                                                    <option value="Calendar actions">Calendar actions</option>
                                                    <option value="House veto actions">House veto actions</option>
                                                    </select>
                                            </li>
                                            <li>
                                                <div className="indent" id="dateRangeIndent">
                                                        <label for="dateRangeFrom">
                                                            Date Range
                                                        </label>
                                                        <a className="token has-tooltip" title="Search for legislation where any activity occurred within a specified time-frame.">?</a>
                                                        <div className="filter-options__date-range">
                                                            <div className="date-range__col">
                                                                <input type="text" name="startDate" id="startDate" value="" className="js-datepicker filter-options__date">
                                                                <input type="hidden" name="startDateHidden" id="startDateHidden" value="">
                                                            </div>
                                                            <div className="date-range__col">
                                                                <input type="text" name="endDate" id="endDate" value="" className="js-datepicker filter-options__date">
                                                                <input type="hidden" name="endDateHidden" id="endDateHidden" value="">
                                                            </div>
                                                        </div>
                                                </div>
        
                                            </li>
                                        </ul>
                                    </fieldset>
                                </form>
                            </aside>
                        </div>
                        <div className="content-group">
                            <button id="clearFilters" data-state-type="false" className="button is-important full-bleed type-gray" type="submit">Clear Filters</button>
                        </div>
                    </div>
                    <div id="bill-search-results" className="content-groupset pos-beta">
                        <div className="content-group directory-results">
            <div className="results posr">
                <div className="cf">
                    <ul className="fl results-filter-list">
                        <li>
                            <button className="button type-blue" type="submit" id="btn-save-search">
                                <b className="icon icon-add" aria-hidden="true"></b> Save Search
                            </button>
                        </li>
                    </ul>
                    <div className="fr fz3 c-dove-gray lh8" id="paging-div">
                        Results Per Page: 20 | <a href="#">50</a> | <a href="#">100</a><input type="hidden" id="no_of_records" value="20">
                    </div>
                </div>
                <hr className="mt4 bdc-dove-gray">
                <div className="results-list__count-row">
                    <p>
                        <span className="dn d--s" id="showing-records">Showing 20 of </span>
                         <b>7,920</b> Results
                        <input type="hidden" id="totalRecords" value="7920">
                    </p>
                    <div className="fx1 tar">
                        <button className="button--manatee" id="trackSearch" disabled="">
                            <i className="lc-icon icon-bell fz2"></i> <span className="dn d--m">Track</span>
                        </button>
                        <button className="button--manatee " id="addCheckedToFolder" disabled="">
                            <i className="lc-icon icon-folder fz2"></i> <span className="dn d--s">Add to folder</span>
                        </button>
                        <button className="button--manatee" id="downloadXLS" disabled="">
                            <i className="icon icon-download"></i> <span className="dn d--m">Download Excel</span>
                        </button>
                        <div className="checkbox--shuttle-gray">
                            <input type="checkbox" id="checkAll" name="checkAll">
                        </div>
                    </div>
                </div>
                <hr>
                <select className="js-spinner-header w mt4" name="sort_order" id="sort_order">
                    <option value="desc" selected="">Sort results by most recently updated first</option>
                    <option value="asc">Sort results chronologically</option>
                </select>
                <div className="posr">
                    <ol className="results-list" id="results-list">
                        <div className="current" id="search"></div>
        <input hidden="" id="tracked_alert_id">
        <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H.R. 2810" data-billid="US_115_HR_2810" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="US_115_HR_2810" data-is-track="0" data-bill-id-foralerts="US_115_HR_2810" data-bill-id="US_115_HR_2810" data-is-amendment-track="0" data-is-amendment="0" data-bill-number="H.R. 2810" data-object-type="Bills" data-is-alert="0" className=" bell-search US_115_HR_2810">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HR_2810" data-bill-number="H.R. 2810" data-object-type="Bills">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="US_115_HR_2810" data-total-record="20" data-bill-amdid="">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HR_2810" data-is-amendment="0" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H.R. 2810" type="checkbox" value="US_115_HR_2810">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_2810" target="_blank">
                                            H.R. 2810</a> </h3>
        
                                    <p className="mt1 lh4">
                                        National Defense Authorization Act for Fiscal Year 2018</p>
        
                                    <p className="fz4">
                                            <b className="c-thunderbird">Pro Title:</b> Fiscal 2018 NDAA</p>
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-06-07 00:00:00">06/07/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/T000238">Rep. Thornberry, Mac</a> (TX-13) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                    <b>CRS Issue Area:</b> Armed Forces and National Security</p>
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a target="_blank" href="/legislative-compass/bill/US_115_HR_2810/cosponsor"> 1</a>
                                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-13 08:56:00">09/13/2017</time></span> -
                                        <b className="c-guardsman-red"> POLITICO Pro </b>
                                                <span className="pro_action_para"></span>
                                            <a target="_blank" href="/legislative-compass/bill/US_115_HR_2810/actions"> See all actions </a>
                                            </p>
                                    <p>The Senate tabled, or killed, 61-36<strong>&nbsp;</strong>an amendment by <a target="_blank" href="https://cd.politicopro.com/people/bg/P000603">Rand Paul</a>&nbsp;(R-Ky.) that would repeal the 2001 and 2002 authorizations for the use of military force, which provided the legal framework for the wars in Afghanistan and Iraq as well as military action in a slew of other countries. Paul's amendment would put an end to both war authorizations six months after the bill becomes law.</p><p>&nbsp;</p><p>Senators adopted the motion to proceed to <a target="_blank" href="http://www.politicopro.com/legislative-compass/bill/US_115_HR_2810">H.R. 2810 (115)</a> about an hour before beginning their vote&nbsp;on the Paul amendment, and then Armed Services Chairman <a target="_blank" href="https://cd.politicopro.com/people/bg/M000303">John McCain</a> (R-Ariz.) offered the Senate version of the NDAA, <a href="http://www.politicopro.com/legislative-compass/bill/US_115_S_1519" target="_blank">S. 1519 (115)</a>, as a substitute to the House-passed language. There had been at least 522&nbsp;amendments filed to the measure as of this morning.</p><p className="mt1">
                                        <b>Committee(s):</b>
                                        <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsas00">
                                                        House Armed Services</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsas26">
                                                        Subcommittee on Emerging Threats and Capabilities</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsas02">
                                                        Subcommittee on Military Personnel</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsas03">
                                                        Subcommittee on Readiness</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsas28">
                                                        Subcommittee on Seapower and Projection Forces</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsas29">
                                                        Subcommittee on Strategic Forces</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsas25">
                                                        Subcommittee on Tactical Air and Land Forces</a>
                                                    </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H.R. 3668" data-billid="US_115_HR_3668" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="US_115_HR_3668" data-is-track="0" data-bill-id-foralerts="US_115_HR_3668" data-bill-id="US_115_HR_3668" data-is-amendment-track="0" data-is-amendment="0" data-bill-number="H.R. 3668" data-object-type="Bills" data-is-alert="0" className=" bell-search US_115_HR_3668">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HR_3668" data-bill-number="H.R. 3668" data-object-type="Bills">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="US_115_HR_3668" data-total-record="20" data-bill-amdid="">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HR_3668" data-is-amendment="0" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H.R. 3668" type="checkbox" value="US_115_HR_3668">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3668" target="_blank">
                                            H.R. 3668</a> </h3>
        
                                    <p className="mt1 lh4">
                                        SHARE Act</p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-01 00:00:00">09/01/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/D000615">Rep. Duncan, Jeff</a> (SC-3) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                    <b>CRS Issue Area:</b> Public Lands and Natural Resources</p>
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a target="_blank" href="/legislative-compass/bill/US_115_HR_3668/cosponsor"> 4</a>
                                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-13 08:28:00">09/13/2017</time></span> -
                                        <b className="c-guardsman-red"> POLITICO Pro </b>
                                                <span className="pro_action_para"></span>
                                            <a target="_blank" href="/legislative-compass/bill/US_115_HR_3668/actions"> See all actions </a>
                                            </p>
                                    <p>The House Natural Resources Committee <a href="https://naturalresources.house.gov/calendar/eventsingle.aspx?EventID=402769">advanced</a>&nbsp;<a target="_blank" href="https://cd.politicopro.com/people/bg/D000615">Jeff Duncan</a>’s (R-S.C.) so-called SHARE Act, <a target="_blank" href="http://www.politicopro.com/legislative-compass/bill/US_115_HR_3668">H.R. 3668 (115)</a>, by a vote of 22-13. The <a href="https://naturalresources.house.gov/uploadedfiles/fc_mu_memo_--_hr_3668_09.12.17__09.13.17.pdf">broad sportsmen’s package</a>&nbsp;would include&nbsp;a controversial provision to&nbsp;make it easier to buy gun silencers. It would also bar the EPA from ever regulating lead ammunition under the Toxic Substances Control Act and would reauthorize&nbsp;the North American Wetlands Conservation Act for five years at $50 million per year.</p><p className="mt1">
                                        <b>Committee(s):</b>
                                        <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsag00">
                                                        House Agriculture</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsif00">
                                                        House Energy and Commerce</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsju00">
                                                        House Judiciary</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsii00">
                                                        House Natural Resources</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsii10">
                                                        Subcommittee on Federal Lands</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hsii13">
                                                        Subcommittee on Water, Power and Oceans</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hspw00">
                                                        House Transportation and Infrastructure</a>
                                                    , <a target="_blank" href="https://cd.politicopro.com/committee/cc/hswm00">
                                                        House Ways and Means</a>
                                                    </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="S. 1519" data-billid="US_115_S_1519" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="US_115_S_1519" data-is-track="0" data-bill-id-foralerts="US_115_S_1519" data-bill-id="US_115_S_1519" data-is-amendment-track="0" data-is-amendment="0" data-bill-number="S. 1519" data-object-type="Bills" data-is-alert="0" className=" bell-search US_115_S_1519">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_S_1519" data-bill-number="S. 1519" data-object-type="Bills">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="US_115_S_1519" data-total-record="20" data-bill-amdid="">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_S_1519" data-is-amendment="0" data-is-alert="0" data-is-amendment-track="0" data-bill-number="S. 1519" type="checkbox" value="US_115_S_1519">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_S_1519" target="_blank">
                                            S. 1519</a> </h3>
        
                                    <p className="mt1 lh4">
                                        National Defense Authorization Act for Fiscal Year 2018</p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-07-10 00:00:00">07/10/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/M000303">Sen. McCain, John</a> (AZ) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                    <b>CRS Issue Area:</b> Armed Forces and National Security</p>
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-13 07:25:00">09/13/2017</time></span> -
                                        <b className="c-guardsman-red"> POLITICO Pro </b>
                                                <span className="pro_action_para"></span>
                                            <a target="_blank" href="/legislative-compass/bill/US_115_S_1519/actions"> See all actions </a>
                                            </p>
                                    <p>The Senate this morning adopted the motion to proceed to <a href="http://www.politicopro.com/legislative-compass/bill/US_115_HR_2810" target="_blank">H.R. 2810 (115)</a>, the House-passed fiscal 2018 defense authorization bill. Once on&nbsp;the bill, Armed Services Chairman <a href="https://cd.politicopro.com/people/bg/M000303" target="_blank">John McCain</a> (R-Ariz.) offered a Senate&nbsp;version of NDAA, <a href="http://www.politicopro.com/legislative-compass/bill/US_115_S_1519" target="_blank">S. 1519 (115)</a>, as a substitute to the House-passed language. For Senate activity on the fiscal 2018 defense policy bill, please follow H.R. 2810.</p><p className="mt1">
                                        <b>Committee(s):</b>
                                        <a target="_blank" href="https://cd.politicopro.com/committee/cc/ssas00">
                                                        Senate Armed Services</a>
                                                    </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 428 " data-billid="US_115_HAMDT_428" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567Mt4gu0Om-ml8JQM" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_428" data-bill-id="US_115_HAMDT_428" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 428 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_428">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_428" data-bill-number="H. Amdt. 428 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567Mt4gu0Om-ml8JQM" data-total-record="20" data-bill-amdid="US_115_HAMDT_428">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_428" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 428 " type="checkbox" value="AV567Mt4gu0Om-ml8JQM">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_428" target="_blank">
                                            H. Amdt. 428 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/G000563">Rep. Gibbs, Bob</a> (OH-7) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 21:51:00">09/12/2017</time></span> -
                                        <action_description>Amendment (A156) offered by Mr. Gibbs.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_428"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 427 " data-billid="US_115_HAMDT_427" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567MrLxc_pmmU29Q7H" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_427" data-bill-id="US_115_HAMDT_427" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 427 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_427">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_427" data-bill-number="H. Amdt. 427 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567MrLxc_pmmU29Q7H" data-total-record="20" data-bill-amdid="US_115_HAMDT_427">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_427" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 427 " type="checkbox" value="AV567MrLxc_pmmU29Q7H">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_427" target="_blank">
                                            H. Amdt. 427 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/E000288">Rep. Ellison, Keith</a> (MN-5) <span className="token bg-democrat"><abbr title="Democrat">D</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 21:44:00">09/12/2017</time></span> -
                                        <action_description>Amendment (A155) offered by Mr. Ellison.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_427"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 426 " data-billid="US_115_HAMDT_426" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567Mqxgu0Om-ml8JQL" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_426" data-bill-id="US_115_HAMDT_426" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 426 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_426">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_426" data-bill-number="H. Amdt. 426 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567Mqxgu0Om-ml8JQL" data-total-record="20" data-bill-amdid="US_115_HAMDT_426">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_426" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 426 " type="checkbox" value="AV567Mqxgu0Om-ml8JQL">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_426" target="_blank">
                                            H. Amdt. 426 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/S000185">Rep. Scott, Robert C. "Bobby"</a> (VA-3) <span className="token bg-democrat"><abbr title="Democrat">D</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 21:44:00">09/12/2017</time></span> -
                                        <action_description>On agreeing to the Scott (VA) amendment (A154) Agreed to by voice vote.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_426"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 425 " data-billid="US_115_HAMDT_425" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567MqSxc_pmmU29Q7G" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_425" data-bill-id="US_115_HAMDT_425" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 425 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_425">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_425" data-bill-number="H. Amdt. 425 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567MqSxc_pmmU29Q7G" data-total-record="20" data-bill-amdid="US_115_HAMDT_425">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_425" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 425 " type="checkbox" value="AV567MqSxc_pmmU29Q7G">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_425" target="_blank">
                                            H. Amdt. 425 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/B001248">Rep. Burgess, Michael C.</a> (TX-26) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 21:38:00">09/12/2017</time></span> -
                                        <action_description>On agreeing to the Burgess amendment (A153) Agreed to by voice vote.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_425"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 424 " data-billid="US_115_HAMDT_424" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567Mp3gu0Om-ml8JQK" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_424" data-bill-id="US_115_HAMDT_424" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 424 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_424">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_424" data-bill-number="H. Amdt. 424 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567Mp3gu0Om-ml8JQK" data-total-record="20" data-bill-amdid="US_115_HAMDT_424">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_424" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 424 " type="checkbox" value="AV567Mp3gu0Om-ml8JQK">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_424" target="_blank">
                                            H. Amdt. 424 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/M001151">Rep. Murphy, Tim</a> (PA-18) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 21:34:00">09/12/2017</time></span> -
                                        <action_description>On agreeing to the Murphy (PA) amendment (A152) Agreed to by voice vote.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_424"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 423 " data-billid="US_115_HAMDT_423" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567MpKxc_pmmU29Q7F" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_423" data-bill-id="US_115_HAMDT_423" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 423 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_423">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_423" data-bill-number="H. Amdt. 423 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567MpKxc_pmmU29Q7F" data-total-record="20" data-bill-amdid="US_115_HAMDT_423">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_423" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 423 " type="checkbox" value="AV567MpKxc_pmmU29Q7F">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_423" target="_blank">
                                            H. Amdt. 423 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/M001151">Rep. Murphy, Tim</a> (PA-18) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 21:28:00">09/12/2017</time></span> -
                                        <action_description>By unanimous consent, the Murphy (PA) amendment was withdrawn.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_423"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 422 " data-billid="US_115_HAMDT_422" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567Molgu0Om-ml8JQJ" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_422" data-bill-id="US_115_HAMDT_422" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 422 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_422">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_422" data-bill-number="H. Amdt. 422 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567Molgu0Om-ml8JQJ" data-total-record="20" data-bill-amdid="US_115_HAMDT_422">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_422" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 422 " type="checkbox" value="AV567Molgu0Om-ml8JQJ">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_422" target="_blank">
                                            H. Amdt. 422 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/M001151">Rep. Murphy, Tim</a> (PA-18) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 21:19:00">09/12/2017</time></span> -
                                        <action_description>Amendment (A150) offered by Mr. Murphy (PA).</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_422"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 421 " data-billid="US_115_HAMDT_421" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567MoHxc_pmmU29Q7E" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_421" data-bill-id="US_115_HAMDT_421" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 421 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_421">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_421" data-bill-number="H. Amdt. 421 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567MoHxc_pmmU29Q7E" data-total-record="20" data-bill-amdid="US_115_HAMDT_421">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_421" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 421 " type="checkbox" value="AV567MoHxc_pmmU29Q7E">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_421" target="_blank">
                                            H. Amdt. 421 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/M001151">Rep. Murphy, Tim</a> (PA-18) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 21:03:00">09/12/2017</time></span> -
                                        <action_description>Amendment (A149) offered by Mr. Murphy (PA).</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_421"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 420 " data-billid="US_115_HAMDT_420" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567Mnlgu0Om-ml8JQI" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_420" data-bill-id="US_115_HAMDT_420" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 420 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_420">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_420" data-bill-number="H. Amdt. 420 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567Mnlgu0Om-ml8JQI" data-total-record="20" data-bill-amdid="US_115_HAMDT_420">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_420" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 420 " type="checkbox" value="AV567Mnlgu0Om-ml8JQI">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_420" target="_blank">
                                            H. Amdt. 420 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/B001243">Rep. Blackburn, Marsha</a> (TN-7) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 20:53:00">09/12/2017</time></span> -
                                        <action_description>Amendment (A148) offered by Mrs. Blackburn.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_420"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 419 " data-billid="US_115_HAMDT_419" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567Mm3xc_pmmU29Q7D" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_419" data-bill-id="US_115_HAMDT_419" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 419 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_419">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_419" data-bill-number="H. Amdt. 419 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567Mm3xc_pmmU29Q7D" data-total-record="20" data-bill-amdid="US_115_HAMDT_419">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_419" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 419 " type="checkbox" value="AV567Mm3xc_pmmU29Q7D">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_419" target="_blank">
                                            H. Amdt. 419 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b><amendment_purpose>An amendment numbered 173 printed in House Report 115-297 to prevent funding to implement the National Labor Relations Board's Ambush Election rule.</amendment_purpose></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/W000798">Rep. Walberg, Tim</a> (MI-7) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 20:40:00">09/12/2017</time></span> -
                                        <action_description>Amendment (A147) offered by Mr. Walberg.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_419"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 418 " data-billid="US_115_HAMDT_418" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567Mmdgu0Om-ml8JQH" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_418" data-bill-id="US_115_HAMDT_418" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 418 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_418">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_418" data-bill-number="H. Amdt. 418 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567Mmdgu0Om-ml8JQH" data-total-record="20" data-bill-amdid="US_115_HAMDT_418">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_418" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 418 " type="checkbox" value="AV567Mmdgu0Om-ml8JQH">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_418" target="_blank">
                                            H. Amdt. 418 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b><amendment_purpose>An amendment numbered 172 printed in House Report 115-297 to reduce the number of positions and funding at Mine Safety and Health Administration by 10%.</amendment_purpose></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/M001187">Rep. Meadows, Mark</a> (NC-11) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 20:28:00">09/12/2017</time></span> -
                                        <action_description>Amendment (A146) offered by Mr. Meadows.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_418"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 417 " data-billid="US_115_HAMDT_417" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567Ml5xc_pmmU29Q7C" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_417" data-bill-id="US_115_HAMDT_417" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 417 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_417">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_417" data-bill-number="H. Amdt. 417 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567Ml5xc_pmmU29Q7C" data-total-record="20" data-bill-amdid="US_115_HAMDT_417">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_417" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 417 " type="checkbox" value="AV567Ml5xc_pmmU29Q7C">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_417" target="_blank">
                                            H. Amdt. 417 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b><amendment_purpose>An amendment numbered 170 printed in House Report 115-297 to reduce the National Labor Relations Board (NLRB) budget by $99,000,000, funding the NLRB at $150,000,000 for FY2018. The amendment also reduces budget authority by $99 million and outlays by $92 million.</amendment_purpose></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/G000576">Rep. Grothman, Glenn</a> (WI-6) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 20:20:00">09/12/2017</time></span> -
                                        <action_description>Amendment (A145) offered by Mr. Grothman.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_417"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="H. Amdt. 416 " data-billid="US_115_HAMDT_416" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="AV567MlXgu0Om-ml8JQG" data-is-track="0" data-bill-id-foralerts="US_115_HAMDT_416" data-bill-id="US_115_HAMDT_416" data-is-amendment-track="0" data-is-amendment="1" data-bill-number="H. Amdt. 416 " data-object-type="Amendments" data-is-alert="0" className=" bell-search US_115_HAMDT_416">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_HAMDT_416" data-bill-number="H. Amdt. 416 " data-object-type="Amendments">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="AV567MlXgu0Om-ml8JQG" data-total-record="20" data-bill-amdid="US_115_HAMDT_416">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_HAMDT_416" data-is-amendment="1" data-is-alert="0" data-is-amendment-track="0" data-bill-number="H. Amdt. 416 " type="checkbox" value="AV567MlXgu0Om-ml8JQG">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_416" target="_blank">
                                            H. Amdt. 416 </a> to <a href="/legislative-compass/bill/US_115_HR_3354" target="_blank">H.R. 3354</a> </h3>
        
                                    <p className="mt1 lh4">
                                        <b>Purpose: </b><amendment_purpose>An amendment numbered 168 printed in House Report 115-297 to reduce funding for the Department of Education's Program Administration , Office of Inspector General, and Office of Student Aid Administration by 2%.</amendment_purpose></p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-09-12 00:00:00">09/12/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/G000576">Rep. Grothman, Glenn</a> (WI-6) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a>
                                                                0</a>
                                                    </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 20:12:00">09/12/2017</time></span> -
                                        <action_description>Amendment (A144) offered by Mr. Grothman.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_HR_3354/amendments-detail?amendment_id=US_115_HAMDT_416"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        
                                                Not Available
                                            </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="S. 488" data-billid="US_115_S_488" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="US_115_S_488" data-is-track="0" data-bill-id-foralerts="US_115_S_488" data-bill-id="US_115_S_488" data-is-amendment-track="0" data-is-amendment="0" data-bill-number="S. 488" data-object-type="Bills" data-is-alert="0" className=" bell-search US_115_S_488">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_S_488" data-bill-number="S. 488" data-object-type="Bills">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="US_115_S_488" data-total-record="20" data-bill-amdid="">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_S_488" data-is-amendment="0" data-is-alert="0" data-is-amendment-track="0" data-bill-number="S. 488" type="checkbox" value="US_115_S_488">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_S_488" target="_blank">
                                            S. 488</a> </h3>
        
                                    <p className="mt1 lh4">
                                        Encouraging Employee Ownership Act</p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-03-01 00:00:00">03/01/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/T000461">Sen. Toomey, Pat</a> (PA) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                    <b>CRS Issue Area:</b> Finance and Financial Sector</p>
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a target="_blank" href="/legislative-compass/bill/US_115_S_488/cosponsor"> 2</a>
                                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 20:00:00">09/12/2017</time></span> -
                                        <action_description>Held at the desk.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_S_488/actions"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        <a target="_blank" href="https://cd.politicopro.com/committee/cc/ssbk00">
                                                        Senate Banking, Housing, and Urban Affairs</a>
                                                    </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="S. 102" data-billid="US_115_S_102" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="US_115_S_102" data-is-track="0" data-bill-id-foralerts="US_115_S_102" data-bill-id="US_115_S_102" data-is-amendment-track="0" data-is-amendment="0" data-bill-number="S. 102" data-object-type="Bills" data-is-alert="0" className=" bell-search US_115_S_102">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_S_102" data-bill-number="S. 102" data-object-type="Bills">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="US_115_S_102" data-total-record="20" data-bill-amdid="">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_S_102" data-is-amendment="0" data-is-alert="0" data-is-amendment-track="0" data-bill-number="S. 102" type="checkbox" value="US_115_S_102">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_S_102" target="_blank">
                                            S. 102</a> </h3>
        
                                    <p className="mt1 lh4">
                                        Securing Access to Networks in Disasters Act of 2017</p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-01-11 00:00:00">01/11/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/C000127">Sen. Cantwell, Maria</a> (WA) <span className="token bg-democrat"><abbr title="Democrat">D</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                    <b>CRS Issue Area:</b> Science, Technology, Communications</p>
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a target="_blank" href="/legislative-compass/bill/US_115_S_102/cosponsor"> 6</a>
                                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 20:00:00">09/12/2017</time></span> -
                                        <action_description>Held at the desk.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_S_102/actions"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        <a target="_blank" href="https://cd.politicopro.com/committee/cc/sscm00">
                                                        Senate Commerce, Science, and Transportation</a>
                                                    </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="S. 484" data-billid="US_115_S_484" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="US_115_S_484" data-is-track="0" data-bill-id-foralerts="US_115_S_484" data-bill-id="US_115_S_484" data-is-amendment-track="0" data-is-amendment="0" data-bill-number="S. 484" data-object-type="Bills" data-is-alert="0" className=" bell-search US_115_S_484">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_S_484" data-bill-number="S. 484" data-object-type="Bills">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="US_115_S_484" data-total-record="20" data-bill-amdid="">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_S_484" data-is-amendment="0" data-is-alert="0" data-is-amendment-track="0" data-bill-number="S. 484" type="checkbox" value="US_115_S_484">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_S_484" target="_blank">
                                            S. 484</a> </h3>
        
                                    <p className="mt1 lh4">
                                        U.S. Territories Investor Protection Act of 2017</p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-03-01 00:00:00">03/01/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/M000639">Sen. Menendez, Robert</a> (NJ) <span className="token bg-democrat"><abbr title="Democrat">D</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                    <b>CRS Issue Area:</b> Finance and Financial Sector</p>
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a target="_blank" href="/legislative-compass/bill/US_115_S_484/cosponsor"> 3</a>
                                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 19:59:00">09/12/2017</time></span> -
                                        <action_description>Held at the desk.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_S_484/actions"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        <a target="_blank" href="https://cd.politicopro.com/committee/cc/ssbk00">
                                                        Senate Banking, Housing, and Urban Affairs</a>
                                                    </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <li>
                        <article className="results-list__result">
                            <div className="cf bill-header-button" data-state="Federal" data-billnumber="S. 462" data-billid="US_115_S_462" data-isalerton="0">
                                <div className="label--federal">
                                    <b>Federal</b> - 115th Congress</div>
                                <div className="fr">
                                    <div className="results-list__result__buttons">
                                        <button id="US_115_S_462" data-is-track="0" data-bill-id-foralerts="US_115_S_462" data-bill-id="US_115_S_462" data-is-amendment-track="0" data-is-amendment="0" data-bill-number="S. 462" data-object-type="Bills" data-is-alert="0" className=" bell-search US_115_S_462">
                                            <i className="lc-icon icon-bell c-dusty-gray"></i>
                                        </button>
        
                                        <button className="js-add-bill-to-folder" data-bill-id="US_115_S_462" data-bill-number="S. 462" data-object-type="Bills">
                                            <i className="lc-icon icon-folder"></i>
                                        </button>
        
                                        <button className="download-record" data-bill-id="US_115_S_462" data-total-record="20" data-bill-amdid="">
                                            <i className="icon icon-download"></i>
                                        </button>
                                    </div>
                                    <input name="bill_id" data-is-track="0" data-bill-id="US_115_S_462" data-is-amendment="0" data-is-alert="0" data-is-amendment-track="0" data-bill-number="S. 462" type="checkbox" value="US_115_S_462">
                                </div>
                            </div>
                            <div className="result-data">
                                <div className="data-item pos-alpha">
                                    <h3 className="name mt1">
                                        <a href="/legislative-compass/bill/US_115_S_462" target="_blank">
                                            S. 462</a> </h3>
        
                                    <p className="mt1 lh4">
                                        Securities and Exchange Commission Overpayment Credit Act</p>
        
                                    <div className="cf">
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                <b>Introduced:</b> <time datetime="2017-02-28 00:00:00">02/28/2017</time></p>
                                            <p className="mt1 lh4">
                                                <b>Sponsor:</b>
                                                <a target="_blank" href="https://cd.politicopro.com/people/bg/H001041">Sen. Heller, Dean</a> (NV) <span className="token bg-republican"><abbr title="Republican">R</abbr></span></p>
                                        </div>
                                        <div className="fl w1_2--s">
                                            <p className="mt1 lh4">
                                                    <b>CRS Issue Area:</b> Finance and Financial Sector</p>
                                            <p className="mt1 lh4">
                                                <b>Cosponsors:</b>
                                                <a target="_blank" href="/legislative-compass/bill/US_115_S_462/cosponsor"> 4</a>
                                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt1 lh4">
                                        <b>Latest Action:</b> <span className="c-dusty-gray"><time datetime="2017-09-12 19:59:00">09/12/2017</time></span> -
                                        <action_description>Held at the desk.</action_description><a target="_blank" href="/legislative-compass/bill/US_115_S_462/actions"> See all actions </a>
                                            </p>
                                    <p className="mt1">
                                        <b>Committee(s):</b>
                                        <a target="_blank" href="https://cd.politicopro.com/committee/cc/ssbk00">
                                                        Senate Banking, Housing, and Urban Affairs</a>
                                                    </p>
                                </div>
                            </div>
                        </article>
                    </li>
                <template className="lc-modal-select_track_options" style="display:none">
            <div id="alert_tracking" className="lc-modal__body">
                <div className="track_email_buttons">
                    <button className="button--link wa whs-nw track_email_alerts">
                        Track with email alerts
                    </button>
                    <button className="button--link wa whs-nw track_without_alerts">
                        Track without alerts
                    </button>
                    <a href="" className="ml1 fz3 js-close-modal ml1" onclick="">Cancel</a>
                </div>
            </div>
        </template><template className="lc-modal-success-message" style="display:none">
                <p>
                    <b className="c-ocean-green">Success!</b> This item has been added to <a href="/legislative-compass/preferences">your preferences page</a>.
                </p>
                <div className="mt4">
                    <button className="button--link js-close-modal ml1 success_ok_button" onclick="">
                        OK
                    </button>
                </div>
        </template>
        <template className="modal_track_bulk_federal_state" style="display:none">
            <div id="alert_tracking">
                <p>
                    Notify me when changes are made to:
                </p>
                <p className="fz3 mt1">
                    <a className="select_all" href="javascript:void(0)">select all</a> | <a className="clear_all" href="javascript:void(0)">clear all</a>
                </p>
                <ul className="lined-list mt1">
                    <li>
                        <input className="alert_option" type="checkbox" value="actions" name="" id="" checked=""> <b>Actions</b>
                    </li>
                    <li>
                        <input className="alert_option" type="checkbox" value="current_status" name="" id="" checked="">
                        <b>
                            Current Status (federal legislation only)
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" type="checkbox" value="bill_text" name="" id="" checked="">
                        <b>
                            Bill Text
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" type="checkbox" value="pro_bill_analysis" name="" id="" checked="">
                        <b>
                            Pro Bill Analysis
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" type="checkbox" value="cosponsor_changes" name="" id="" checked="">
                        <b>
                            Cosponsor changes
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" type="checkbox" value="crs_summary_areas" name="" id="" checked="">
                        <b>
                            CRS Issue Areas (federal legislation only)
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" type="checkbox" value="crs_summary" name="" id="" checked="">
                        <b>
                            CRS Summary (federal legislation only)
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" type="checkbox" value="amendments" name="" id="" checked="">
                        <b>
                            Amendments (federal legislation only)
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" type="checkbox" value="documents" name="" id="" checked="">
                        <b>
                            Documents
                        </b>
                        (CBO cost estimates, committee reports, etc)
                    </li>
                    <li>
                        <input className="alert_option" type="checkbox" value="related_bills" name="" id="" checked="">
                        <b>
                            Related Bills
                        </b>
                    </li>
                </ul>
                <p className="mt4">
                    How often?
                </p>
                <ul className="radio-list is-active">
                    <li>
                        <input className="alert_frequency_radio" type="radio" name="alertHowOften" id="" value="immediately"> <b>Immediately</b>
                    </li>
                    <li>
                        <input className="alert_frequency_radio" type="radio" name="alertHowOften" id="" value="morning"> <b>Daily digest (morning)</b>
                    </li>
                    <li>
                        <input type="radio" name="alertHowOften" className="alert_frequency_radio" id="" value="evening"> <b>Daily digest (evening)</b>
                    </li>
                    <li>
                        <input className="alert_frequency_radio" type="radio" name="alertHowOften" id="" value="weekly"> <b>Weekly</b>
                    </li>
                </ul>
                <div className="mt4">
                    <button className="button--link save_button inactive" onclick="openModal(11)">
                        Save
                    </button>
                    <a href="" className="ml1 fz3 js-close-modal ml1">Cancel</a>
                </div>
            </div>
        </template>
        <template className="modal_track_bulk_federal" style="display:none">
            <div id="alert_tracking">
                <p>
                    Notify me when changes are made to:
                </p>
                <p className="fz3 mt1">
                    <a className="select_all" href="javascript:void(0)">select all</a> | <a className="clear_all" href="javascript:void(0)">clear all</a>
                </p>
                <ul className="lined-list mt1">
                    <li>
                        <input className="alert_option" value="actions" type="checkbox" name="" id="" checked=""> <b>Actions</b>
                    </li>
                    <li>
                        <input className="alert_option" value="current_status" type="checkbox" name="" id="" checked="">
                        <b>
                            Current Status
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" value="bill_text" type="checkbox" name="" id="" checked="">
                        <b>
                            Bill Text
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" value="pro_bill_analysis" type="checkbox" name="" id="" checked="">
                        <b>
                            Pro Bill Analysis
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" value="cosponsor_changes" type="checkbox" name="" id="" checked="">
                        <b>
                            Cosponsor changes
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" value="crs_summary_areas" type="checkbox" name="" id="" checked="">
                        <b>
                            CRS Issue Areas
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" value="crs_summary" type="checkbox" name="" id="" checked="">
                        <b>
                            CRS Summary
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" value="amendments" type="checkbox" name="" id="" checked="">
                        <b>
                            Amendments
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" value="documents" type="checkbox" name="" id="" checked="">
                        <b>
                            Documents
                        </b>
                        (CBO cost estimates, committee reports, etc)
                    </li>
                    <li>
                        <input className="alert_option" type="checkbox" value="related_bills" name="" id="" checked="">
                        <b>
                            Related Bills
                        </b>
                    </li>
                </ul>
                <p className="mt4">
                    How often?
                </p>
                <ul className="radio-list is-active">
                    <li>
                        <input className="alert_frequency_radio" type="radio" name="alertHowOften" id="" value="immediately"> <b>Immediately</b>
                    </li>
                    <li>
                        <input className="alert_frequency_radio" type="radio" name="alertHowOften" id="" value="morning"> <b>Daily digest (morning)</b>
                    </li>
                    <li>
                        <input className="alert_frequency_radio" type="radio" name="alertHowOften" id="" value="evening"> <b>Daily digest (evening)</b>
                    </li>
                    <li>
                        <input className="alert_frequency_radio" type="radio" name="alertHowOften" id="" value="weekly"> <b>Weekly</b>
                    </li>
                </ul>
                <div className="mt4">
                    <button className="button--link save_button inactive" onclick="openModal(11)">
                        Save
                    </button>
                    <a href="" className="ml1 fz3 js-close-modal ml1">Cancel</a>
                </div>
            </div>
        </template>
        <template className="modal_track_bulk_state" style="display:none">
            <div id="alert_tracking">
                <p>
                    Notify me when changes are made to:
                </p>
                <p className="fz3 mt1">
                    <a className="select_all" href="javascript:void(0)">select all</a> | <a className="clear_all" href="javascript:void(0)">clear all</a>
                </p>
                <ul className="lined-list mt1">
                    <li>
                        <input className="alert_option" value="actions" type="checkbox" name="" id="" checked=""> <b>Actions</b>
                    </li>
                    <li>
                        <input className="alert_option" value="bill_text" type="checkbox" name="" id="" checked="">
                        <b>
                            Bill Text
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" value="pro_bill_analysis" type="checkbox" name="" id="" checked="">
                        <b>
                            Pro Bill Analysis
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" value="cosponsor_changes" type="checkbox" name="" id="" checked="">
                        <b>
                            Cosponsor changes
                        </b>
                    </li>
                    <li>
                        <input className="alert_option" value="documents" type="checkbox" name="" id="" checked="">
                        <b>
                            Documents
                        </b>
                        (CBO cost estimates, committee reports, etc)
                    </li>
                    <li>
                        <input className="alert_option" type="checkbox" value="related_bills" name="" id="" checked="">
                        <b>
                            Related Bills
                        </b>
                    </li>
                </ul>
                <p className="mt4">
                    How often?
                </p>
                <ul className="radio-list is-active">
                    <li>
                        <input className="alert_frequency_radio" type="radio" name="alertHowOften" id="" value="immediately"> <b>Immediately</b>
                    </li>
                    <li>
                        <input className="alert_frequency_radio" type="radio" name="alertHowOften" id="" value="morning"> <b>Daily digest (morning)</b>
                    </li>
                    <li>
                        <input className="alert_frequency_radio" type="radio" name="alertHowOften" id="" value="evening"> <b>Daily digest (evening)</b>
                    </li>
                    <li>
                        <input className="alert_frequency_radio" type="radio" name="alertHowOften" id="" value="weekly"> <b>Weekly</b>
                    </li>
                </ul>
                <div className="mt4">
                    <button className="button--link save_button inactive" onclick="openModal(11)">
                        Save
                    </button>
                    <a href="" className="ml1 fz3 js-close-modal ml1">Cancel</a>
                </div>
            </div>
        </template><template className="lc-modal-error-message" style="display:none">
            <p className="mt1 c-sangria">Sorry, we seem to be encountering an issue with your submission at this time. Please contact your POLITICO Pro account manager.</p>
                <div className="mt4">
                    <button className="button--link js-close-modal ml1 success_ok_button" onclick="">
                        OK
                    </button>
                </div>
        </template>
        <template className="lc-modal-too-many-items-message">
            <p>Sorry, but you've selected too many items. Please remove  items then try again.</p>
            <div className="mt4">
                <button className="button--link js-close-modal" type="button">
                    OK
                </button>
            </div>
        </template>
        </ol>
                    <div id="loading-results" className="js-spinner-overlay loading-results dn" style="height: 355px; width: 863px;">
                        <img src="/images/website/shared/template/loading.gif" alt="loading..." />
                    </div>
                </div>
                <div className="js-spinner-footer">
                    <div className="lc-page-end-button-row mt3" id="load-more-div">
                            <button id="search-load-more" className="tt-u" type="submit">Load More</button>
                        </div>
                    <input type="hidden" id="showingRecords" value="20" data-total-records="7920" data-no-of-records="20">
                </div>
            </div>
        </div>
        </div>
        
                </div>
            </div>
        </div>
        )
    }
}

export default Main
