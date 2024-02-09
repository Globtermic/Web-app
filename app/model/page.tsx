"use client"
import {Image} from "@nextui-org/image";
import './page.css';
import { useCallback, useEffect, useState } from "react";

const Sidebar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [textAppear, setTextAppear] = useState(false);

    const onScroll = useCallback(event => {
        const { pageYOffset, scrollY } = window;
        console.log("yOffset", pageYOffset, "scrollY", scrollY);
        setScrollY(window.pageYOffset);
    }, []);
  
    useEffect(() => {
      //add eventlistener to window
      window.addEventListener("scroll", onScroll, { passive: true });
      // remove event on unmount to prevent a memory leak with the cleanup
      return () => {
         window.removeEventListener("scroll", onScroll, { passive: true });
      }
    }, []);


    return <div className="sidebar"  onMouseEnter={() => setTextAppear(true)} onMouseLeave={() => setTextAppear(false)}>
        <div className="inline-block content-none" >
            {!textAppear && <div className={`${scrollY > 200 ? 'sidebar-element' : 'selected'}`}></div>}
            {textAppear && <div className={`${scrollY > 200 ? 'sidebar-element-text' : 'sidebar-element-text-index'}`} 
            onClick={() => window.scrollTo({top:0})} >Presentation</div>}
        </div>
        <div className="inline-block content-none">
        {!textAppear && <div className={`${scrollY > 900 || scrollY < 200 ? 'sidebar-element' : 'selected'}`}></div>}
            {textAppear && <div className={`${scrollY > 900 || scrollY < 200 ? 'sidebar-element-text' : 'sidebar-element-text-index'}`} 
            onClick={() => window.scrollTo({top:220})} >Description</div>}
        </div>
        <div className="inline-block content-none">
        {!textAppear && <div className={`${scrollY > 1500 || scrollY < 900 ? 'sidebar-element' : 'selected'}`}></div>}
            {textAppear && <div className={`${scrollY > 1500 || scrollY < 900 ? 'sidebar-element-text' : 'sidebar-element-text-index'}`} 
            onClick={() => window.scrollTo({top:920})} >Caracteristiques</div>}
        </div>
        <div className="inline-block content-none">
        {!textAppear && <div className={`${scrollY > 2000 || scrollY < 1500 ? 'sidebar-element' : 'selected'}`}></div>}
            {textAppear && <div className={`${scrollY > 2000 || scrollY < 1500 ? 'sidebar-element-text' : 'sidebar-element-text-index'}`} 
            onClick={() => window.scrollTo({top:1520})} >Coût énergetique</div>}
        </div>
        <div className="inline-block content-none">
        {!textAppear && <div className={`${scrollY > 2500 || scrollY < 2000 ? 'sidebar-element' : 'selected'}`}></div>}
            {textAppear && <div className={`${scrollY > 2500 || scrollY < 2000 ? 'sidebar-element-text' : 'sidebar-element-text-index'}`} 
            onClick={() => window.scrollTo({top:2020})} >Similaire</div>}
        </div>

    </div>
}

const DummyText = () => {
    return (<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id sapien diam. Curabitur non justo id tortor mollis facilisis. Suspendisse pretium vitae neque in dictum. Sed magna ligula, commodo at rutrum eu, pellentesque condimentum leo. Proin ullamcorper, leo non porttitor fringilla, mi erat iaculis nibh, vel elementum urna sapien sed elit. Duis laoreet sit amet nibh eu pharetra. Fusce dolor nisl, elementum a tortor non, euismod elementum felis. Etiam placerat felis orci, ac lacinia ex consequat nec.

    Mauris laoreet convallis libero, vel fringilla lacus rutrum in. Phasellus dignissim odio at ante venenatis aliquet. Maecenas non condimentum neque. Vivamus fermentum, sapien at consectetur mollis, dui risus malesuada mauris, nec accumsan tortor libero quis purus. Vestibulum efficitur eros eget tincidunt accumsan. Donec iaculis diam id justo facilisis, vitae vulputate elit efficitur. Vestibulum efficitur justo odio, vitae aliquam arcu lacinia a. Aliquam finibus mauris sed elementum tincidunt. Quisque nulla diam, accumsan lacinia nisi sed, laoreet iaculis quam. Vestibulum dignissim placerat odio id eleifend. Vestibulum placerat arcu nec libero eleifend sollicitudin. Aliquam a odio scelerisque tortor volutpat pellentesque dapibus eget metus. Quisque hendrerit eros porta neque gravida, luctus ullamcorper lectus gravida. In faucibus libero in pharetra tempor.
    
    Integer ut nunc et risus congue sollicitudin id eu quam. Curabitur eu lacinia enim. Vivamus tortor justo, eleifend at vestibulum ut, commodo eu augue. Proin at viverra ex. Praesent ullamcorper luctus nisi in auctor. Pellentesque ex justo, faucibus eget leo vitae, ultricies pharetra lectus. Donec porttitor quam ac lorem bibendum, vitae vulputate felis malesuada. Duis volutpat magna sed hendrerit accumsan. Sed vel est ex. Vivamus ut pretium ex, non imperdiet nisl. Praesent laoreet ex quis ullamcorper maximus. Mauris vestibulum, ante id imperdiet tempor, enim risus ullamcorper nunc, id viverra sapien risus eu metus. Integer sodales dolor arcu, volutpat aliquam nisl laoreet eget. Pellentesque ex tortor, lobortis placerat neque sed, facilisis lobortis sem. Fusce sapien risus, aliquam ac accumsan in, lobortis dapibus enim.
    
    Mauris vel euismod risus. Nam bibendum in felis ac posuere. Praesent eu turpis fermentum enim varius blandit. Phasellus sit amet posuere urna, in rutrum nulla. Duis interdum risus sit amet faucibus lacinia. Aliquam eget metus vel elit malesuada aliquet sed ut magna. Aliquam egestas dolor a purus congue, et ultrices ante dictum. Suspendisse tristique porttitor velit. Phasellus ac diam ut odio sollicitudin interdum sit amet a orci. Praesent accumsan efficitur quam. Maecenas convallis luctus pulvinar. Sed at condimentum magna. Etiam eu malesuada ipsum. Mauris interdum, lorem at interdum cursus, lorem velit accumsan quam, vel auctor erat nulla a massa. Aliquam mattis aliquet libero quis dictum. Duis quis fringilla diam.
    
    <p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p><p>.</p>Nulla laoreet fringilla massa ut imperdiet. Suspendisse tempor, ipsum sed porttitor tristique, mauris nulla placerat metus, non interdum ipsum lorem ac quam. Sed pretium est lorem, eu sollicitudin ipsum mattis quis. Sed nec eleifend velit. Fusce ullamcorper felis ante. Curabitur imperdiet purus sed ex viverra, quis euismod mauris bibendum. Quisque maximus leo dolor, at condimentum diam ullamcorper non. Etiam consequat vel justo quis sodales. In hac habitasse platea dictumst. Mauris aliquet nec libero sit amet blandit. In in ipsum tempor, pharetra tellus et, bibendum nulla. Vivamus euismod risus aliquet, convallis massa in, faucibus neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    
    Aenean hendrerit lectus at est auctor rutrum. Integer in arcu malesuada odio consectetur lobortis. Nam mi massa, efficitur a efficitur vel, tincidunt eu lorem. Vivamus quis aliquet odio. In pulvinar lobortis luctus. Vestibulum id mollis quam. Curabitur id mattis urna. Cras id mi tempor, viverra lorem vitae, interdum tortor. Ut enim ligula, bibendum ut dignissim et, elementum cursus magna. Cras ornare ex sed enim blandit feugiat. Curabitur vehicula fringilla turpis id laoreet. Nulla aliquam sem at sapien viverra condimentum. Quisque id porttitor risus. Sed vulputate magna vitae nulla dignissim dignissim. Curabitur pulvinar laoreet facilisis. Proin lobortis odio ut purus elementum rhoncus.
    
    Sed in scelerisque lorem, in vehicula ipsum. Etiam interdum vitae metus a malesuada. Nullam laoreet massa nisl, sit amet viverra eros sollicitudin suscipit. Maecenas eget mauris vel felis ornare aliquam. In hac habitasse platea dictumst. Sed a turpis sed lacus interdum sagittis eu quis libero. Suspendisse eu mattis ligula. Fusce vel diam quis velit volutpat bibendum sed sed felis. Nunc et justo lectus. Cras rutrum malesuada ex, in cursus eros ullamcorper ut.
    
    Donec sit amet finibus erat. Donec accumsan est in leo elementum egestas. Praesent sit amet arcu arcu. Donec purus felis, facilisis nec ultricies sit amet, aliquet vitae libero. Nulla libero mauris, iaculis eget accumsan eu, vehicula in nisl. Vestibulum id velit porta, facilisis erat sit amet, consectetur sem. Pellentesque eleifend dui in placerat efficitur. Vivamus risus ipsum, faucibus vehicula ligula non, finibus tristique augue. Etiam consequat elit ante. Phasellus a tempor libero. Nulla ligula dui, placerat a tempus ac, facilisis vel lorem. In nec eleifend metus. Quisque lacinia, ante vel interdum auctor, sapien lectus interdum nibh, quis pellentesque felis leo et neque. Cras laoreet sem sit amet est congue, non eleifend elit tristique.
    
    Fusce eu facilisis ex, quis rutrum lacus. Donec lobortis ante non dui ultricies, non luctus quam ultricies. Nunc eget cursus diam. Donec mattis nibh leo, sed sagittis odio maximus vitae. Vivamus venenatis lectus nec magna maximus dapibus. Quisque nibh lorem, sodales eu lacus sed, auctor elementum nunc. Fusce rutrum feugiat tortor, eu ultricies mi mollis a. Aenean condimentum at nulla ut gravida. Phasellus condimentum mi ante, vitae viverra turpis consectetur ut. Ut massa risus, porta sed euismod eu, viverra non nibh. Nam luctus imperdiet metus hendrerit condimentum. Integer lacus tellus, tristique eget faucibus eu, hendrerit ac nulla. Mauris malesuada, ipsum a auctor lobortis, quam neque gravida magna, a tempus nulla mi nec sapien. Sed id metus ultrices, interdum enim quis, hendrerit massa.
    
    Sed eu pharetra mauris. Phasellus dignissim egestas fringilla. Aenean dapibus molestie eros. Donec aliquam purus sem, a varius purus porta sit amet. Phasellus quis quam consequat, laoreet neque eget, vehicula massa. Morbi suscipit sit amet ipsum ut convallis. Etiam placerat enim vel commodo malesuada.
    
    Nullam sit amet augue commodo, dictum dui et, porttitor neque. Morbi condimentum feugiat justo a consequat. Donec ornare libero feugiat nibh cursus, a finibus odio tincidunt. Nullam aliquam aliquam urna vel efficitur. Nam bibendum sit amet felis et lacinia. Pellentesque eu vestibulum risus. Pellentesque sit amet enim vel ipsum convallis aliquam et congue risus. Nam sollicitudin aliquam neque, quis pretium tortor tincidunt nec. Vestibulum leo massa, mattis eget faucibus sed, placerat quis elit.
    
    In ut justo nulla. Maecenas pharetra condimentum metus ac feugiat. Fusce venenatis fringilla venenatis. Vestibulum accumsan tincidunt quam. Cras ut justo vitae lorem tincidunt interdum. Vestibulum hendrerit dignissim sodales. Pellentesque varius orci id sem sodales sodales. Mauris feugiat, augue eu tristique luctus, metus odio pharetra neque, feugiat fermentum neque nisl fermentum est. Aliquam vitae viverra sem, non bibendum nulla. Aenean nisi mi, commodo sit amet pellentesque sed, vestibulum tincidunt turpis.
    
    Nam commodo malesuada ipsum non semper. Nullam at imperdiet turpis, eget placerat augue. Sed sollicitudin dolor a dapibus sodales. Integer lobortis vel eros nec placerat. Ut tincidunt eu leo in dignissim. Etiam at erat erat. Duis ornare tellus at nibh tincidunt, ut commodo velit eleifend.
    
    Proin pellentesque pretium ligula, ac facilisis nibh tincidunt ut. Quisque et ex tristique, mollis risus et, pulvinar arcu. Vestibulum auctor nec sem sit amet blandit. Aenean fermentum tempor sapien, eu pharetra tellus maximus sit amet. Donec sed lectus dui. Nam rhoncus consectetur fermentum. Proin nibh mauris, feugiat ut nunc a, bibendum dictum augue. In quis hendrerit velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sem tellus, consectetur vel magna nec, porta laoreet purus. Nunc euismod neque mi, eget feugiat ipsum sagittis at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vel est in metus cursus imperdiet. Nulla ultricies tellus erat, sit amet vulputate ante volutpat sed.
    
    Ut id fringilla enim, quis tincidunt tellus. Morbi tempus lectus ac magna tristique, vel finibus tortor varius. Phasellus convallis dolor nec lectus vehicula feugiat. Donec ultricies sit amet lectus lacinia interdum. Phasellus augue magna, mollis nec facilisis vel, tristique vel sapien. Pellentesque dictum lacus sed tortor rutrum scelerisque. Suspendisse lacinia risus eu elit placerat maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tincidunt non justo ac dictum. Fusce pellentesque nulla in fermentum tincidunt. Sed tincidunt tortor id metus fermentum, nec eleifend ante consequat. Duis elementum iaculis massa sed egestas. In hac habitasse platea dictumst.</h3>
    );
}


export default function ModelPage() {
    return (<div>
        <Sidebar></Sidebar>
        <DummyText/>
        <p>.</p>
        <DummyText/>
        </div>)
}