<?php
use yii\helpers\Html;
use frontend\assets\AllAsset;
use frontend\assets\AppAsset;
use yii\helpers\Url;
use yii\helpers\ArrayHelper;
use frontend\controllers\SiteController;
$asset = AllAsset::register($this);
$baseUrl = $asset->baseUrl;
//$baseUrlN = $asset->baseUrl;
//$baseUrlFon=str_replace('backend', 'frontend', $baseUrlN);
//$baseUrl3 = '../web/imagenes/';
//$model= new \backend\models\Tblpropiedades();

$urlBadeGen=SiteController::DameUrlBase();
//$urlVista=SiteController::DameUrlIdioma();

?>


	<!-- SubHeader =============================================== -->
	<section class="parallax_window_in" data-parallax="scroll" data-image-src="<?php echo  $urlBadeGen ?>/frontend/web/assets/img/sub_header_general.jpg" data-natural-width="1400" data-natural-height="470">
		<div id="sub_content_in">
			<h1>Talleres de Sexualidad</h1>
			
		</div>
	</section>
	<!-- End section -->
	<!-- End SubHeader ============================================ -->

	<div class="container_styled_1">
		<div class="container margin_60_35">
			<div class="row">

				<aside class="col-md-3 col-md-push-9" id="sidebar">
					<div class="theiaStickySidebar">
						<div id="filters_col">
							<a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt">Filtros </a>
							<div class="collapse" id="collapseFilters">
                                                            <form action="<?= Url::to(['/talleres/all']); ?>" method="post" >
								<div class="filter_type">
									<h6>Precio</h6>
									<input type="text" id="range" name="range" value="">
                                                                        <input type="hidden" id="from" name="from" value="<?php echo $from; ?>">
                                                                        <input type="hidden" id="to" name="to" value="<?php echo $to; ?>">
								</div>
                                                                <br>
						               <button type="submit"  class="btn_full">Buscar</a>
                                                           </form>
							</div>
							<!--End collapse -->
						</div>
						<!--End filters col-->
					</div>
					<!--End Sticky -->
				</aside>
				<!--End aside -->

				<div class="col-md-9 col-md-pull-3">
					<div class="row">
                                            <?php foreach ($ListaCursos as $Curso) 
                                            { 
                                             $precio=number_format( $Curso['fPrecio'],2);
                                            ?>
                                                <!--  col-md-6 -->
                                                <div class="col-md-6">
                                                    <div class="course_container">
                                                        <div class="ribbon top"><span>Nuevo</span>
                                                        </div>
                                                        <figure>
                                                            <a href="<?= Url::to(['/talleres/'.$Curso['cSlug'.$idioma]]); ?>">
                                                                <img src="<?php echo  $urlBadeGen ?>/backend/web/imagenes/small/<?php echo $Curso['iIdGaleria'] ?>.<?php echo $Curso['cExtencion'] ?>" width="800" height="533" class="img-responsive" alt="Image">
                                                                <div class="short_info"><i class="icon-clock-1"></i><?php echo $Curso['fDuracion'] ?> hrs</div>
                                                            </a>
                                                        </figure>
                                                        <div class="course_title">
                                                            <div class="type"><span>Curso</span>
                                                            </div>
                                                            <h3><a href="<?= Url::to(['/talleres/'.$Curso['cSlug'.$idioma]]); ?>"><?php echo $Curso['CNombreCurso'.$idioma] ?></a></h3>
                                                            <div class="info_2 clearfix"><span class="price"><sup>$</sup><?php echo$precio ?></span><span class="users"><?php echo $Curso['iMaximoParticipantes'] ?></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
						<!-- End col-md-6 -->
                                           <?php } ?>
					
					</div>
					
				</div>
                <!-- End col -->
			</div>
			<!-- End Row -->
		</div>
            
		<!-- End container -->
     </div>
        <input type="hidden" name="iMinimo" id="iMinimo" value="<?php echo $min_Precio; ?>" />
        <input type="hidden" name="iMinimo" id="iMaximo" value="<?php echo $max_Precio; ?>" />
      <!-- End container_styled_1 -->