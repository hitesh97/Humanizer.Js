﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Humanizer;
(function (Humanizer) {
    (function (Configuration) {
        var OrdinalizerRegistry = (function (_super) {
            __extends(OrdinalizerRegistry, _super);
            function OrdinalizerRegistry() {
                _super.call(this, new Humanizer.Localisation.Ordinalizers.DefaultOrdinalizer());
                this.register("en", new Humanizer.Localisation.Ordinalizers.EnglishOrdinalizer());
            }
            return OrdinalizerRegistry;
        })(Configuration.LocaliserRegistry);
        Configuration.OrdinalizerRegistry = OrdinalizerRegistry;
    })(Humanizer.Configuration || (Humanizer.Configuration = {}));
    var Configuration = Humanizer.Configuration;
})(Humanizer || (Humanizer = {}));
//# sourceMappingURL=OrdinalizerRegistry.js.map
