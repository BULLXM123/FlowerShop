;(function(global,factory,plug){
    return factory.call(global,global.jQuery,plug)
})(this,function($,validator){
        var __DEFS__={
        raise:"change",
        errorMsg:"* 检验失败"

        }
        var __RULES__={
            "require":function(){
                var val = this.val();
                return val!=""&&val!=null&&val!=undefined;
            },
            "email":function(){
                return /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(this.val());
            },
            "regex":function(regex){
                return new RegExp(regex).test(this.val());
            }
        }

        $.fn[validator] = function(ops){
            if(!this.is("form")){
                throw new Error("type error[require form tag]");
            }
            $.extend(this,__DEFS__,ops);
            var that = this;
            this.$fields = this.find("input,textarea,select").not("input[type=submit],input[type=image],input[type=reset],input[type=button]");
            this.$fields.on(this.raise,function(){
                var $field = $(this);
                var $group = $field.parents(".form-group");
                $group.removeClass("has-success has-error");
                $group.find(".help-block").remove();
                var config,error,__err__=true;
                
                $.each(__RULES__,function(rule,valid){
  
                    config = $field.data("bv-"+rule);
                    if(config){
                        __err__ = valid.call($field,config);
                       
                        $group.addClass(__err__?"has-success":"has-error");
                        if(!__err__){
                            error=$field.data("bv-"+rule+"-error")||that.errorMsg;
                            $field.after('<span class="help-block">'+error+'</span>');
                        }
                        return __err__;
                    }
                });
            });
            return this;

        }

},"bootstrapValidator");