var v_largo_ml, v_largo_m2, v_ancho_m2, visla, v_gamma, v_espesor, v_cantos, v_copetes, vc_1271094332,vc_1271094379, v_fregadero, ACC_1498052213_p, ACC_FYYVHATMUXQJ_p, ACC_1272265900_p;
var ACC_1272265900_lm2, ACC_1272265900_am2, ACC_1272266042_p, ACC_NZPNCZCIVHOG_p, ACC_1272266446_p, ACC_1272266476_p, ACC_1272266511_p, ACC_1291382119_p, ACC_1273565081_c, ACC_1273565081_p;





$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url'],input[type='email']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        // for(var i=0; i<curInputs.length; i++){
        //     if (!curInputs[i].validity.valid){
        //         isValid = false;
        //         $(curInputs[i]).closest(".form-group").addClass("has-error");
        //     }
        // }
        console.log(curStepBtn, "Step counter")
        // Validations for each Step
        if(curStepBtn == 'step-1'){
            v_largo_ml = $("input[name='v_largo_ml']").val()
            v_largo_m2 = $("input[name='v_largo_m2']").val()
            v_ancho_m2 = $("input[name='v_ancho_m2']").val()
            visla = $("input[name='visla']").val()
        }
        if(curStepBtn == 'step-2'){

        }
        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});

function submit(){
    v_largo_ml = $("input[name='v_largo_ml']").val()
    v_largo_m2 = $("input[name='v_largo_m2']").val()
    v_ancho_m2 = $("input[name='v_ancho_m2']").val()
    visla = $("input[name='visla']").val()
    optradio = $("input[name='optradio']").val()
    v_gamma = $("input[name='v_gamma']").val()
    v_cantos = $("input[name='v_cantos']").val()
    v_copetes = $("input[name='v_copetes']").val()
    vc_1271094332 = $("input[name='vc_1271094332']").val()
    vc_1271094379 = $("input[name='vc_1271094379']").val()
    v_fregadero = $("input[name='v_fregadero']").val()
    
}